(function () {
    'use strict';

    if (!document.body.classList.contains('question-bank')) {
        return;
    }

    var chapters = window.QUESTION_BANK_GUIDE;

    if (!Array.isArray(chapters) || !chapters.length) {
        console.error('Chapter guide content could not be loaded.');
        return;
    }

    var section = document.createElement('section');
    section.className = 'question-bank-guide';
    section.id = 'chapter-learning-guides';
    section.setAttribute('aria-labelledby', 'chapter-guide-title');

    var heading = document.createElement('div');
    heading.className = 'question-bank-guide-heading';
    heading.innerHTML =
        '<p class="question-bank-guide-eyebrow">Review the essentials</p>' +
        '<h2 id="chapter-guide-title">Concepts, Definitions &amp; Worked Examples</h2>' +
        '<p>Open a chapter for a concise concept review, a key definition, a worked example and a figure from the course notes.</p>';
    section.appendChild(heading);

    var chapterList = document.createElement('div');
    chapterList.className = 'question-bank-guide-list';

    chapters.forEach(function (chapter, index) {
        var details = document.createElement('details');
        var summary = document.createElement('summary');
        var content = document.createElement('div');
        var textGrid = document.createElement('div');
        var definitionCard = createTextCard(chapter.definitionTitle, chapter.definition, 'Definition');
        var conceptCard = createTextCard(chapter.conceptTitle, chapter.concept, 'Concept');
        var exampleCard = createTextCard(
            chapter.exampleTitle,
            chapter.example,
            'Worked example',
            chapter.exampleSolution
        );
        var figure = document.createElement('figure');
        var image = document.createElement('div');
        var caption = document.createElement('figcaption');
        var link = document.createElement('a');

        details.className = 'question-bank-guide-chapter';
        details.open = index === 0;
        summary.textContent = chapter.title;
        content.className = 'question-bank-guide-content';
        textGrid.className = 'question-bank-guide-cards';
        figure.className = 'question-bank-guide-figure';
        image.className = 'question-bank-guide-image';
        image.innerHTML = chapter.figure;
        caption.textContent = chapter.figureCaption;
        link.className = 'question-bank-guide-link';
        link.href = 'Chapter' + chapter.chapter + '.html';
        link.textContent = 'Read the full chapter';

        textGrid.appendChild(definitionCard);
        textGrid.appendChild(conceptCard);
        textGrid.appendChild(exampleCard);
        figure.appendChild(image);
        figure.appendChild(caption);
        content.appendChild(textGrid);
        content.appendChild(figure);
        content.appendChild(link);
        details.appendChild(summary);
        details.appendChild(content);
        chapterList.appendChild(details);
    });

    section.appendChild(chapterList);

    var main = document.querySelector('main') || document.body;
    var practiceBank = main.querySelector('.practice-bank');

    if (practiceBank) {
        main.insertBefore(section, practiceBank);
    } else {
        main.appendChild(section);
    }

    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise([section]).catch(function (error) {
            console.error('Could not render equations in the chapter guides:', error);
        });
    }

    function createTextCard(title, text, label, solution) {
        var card = document.createElement('article');
        var kicker = document.createElement('p');
        var cardTitle = document.createElement('h3');
        var body = document.createElement('p');

        card.className = 'question-bank-guide-card question-bank-guide-' + label.toLowerCase().replace(/\s+/g, '-');
        kicker.className = 'question-bank-guide-card-label';
        kicker.textContent = label;
        cardTitle.textContent = title;
        body.className = 'question-bank-guide-card-body';
        body.textContent = text;

        card.appendChild(kicker);
        card.appendChild(cardTitle);
        card.appendChild(body);

        if (label === 'Worked example' && solution) {
            var solutionDetails = document.createElement('details');
            var solutionSummary = document.createElement('summary');
            var solutionBody = document.createElement('p');

            solutionDetails.className = 'question-bank-guide-solution';
            solutionSummary.textContent = 'Show worked solution';
            solutionBody.textContent = solution;
            solutionDetails.appendChild(solutionSummary);
            solutionDetails.appendChild(solutionBody);
            card.appendChild(solutionDetails);
        }

        return card;
    }
})();
