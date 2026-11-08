(function () {
    'use strict';

    if (!document.body.classList.contains('question-bank')) {
        return;
    }

    var questions = window.QUESTION_BANK_PRACTICE;

    if (!Array.isArray(questions) || !questions.length) {
        console.error('Conceptual and numerical practice questions could not be loaded.');
        return;
    }

    var typeLabels = {
        conceptual: 'Conceptual questions',
        numerical: 'Numerical problems'
    };
    var chapterTitles = {};

    Array.prototype.forEach.call(document.querySelectorAll('h2'), function (heading) {
        var match = (heading.textContent || '').match(/^\s*Chapter\s+(\d+)\s*:/i);

        if (match) {
            chapterTitles[match[1]] = heading.textContent.trim();
        }
    });

    var section = document.createElement('section');
    section.className = 'practice-bank';
    section.id = 'conceptual-numerical-questions';
    section.setAttribute('aria-labelledby', 'practice-bank-title');

    var header = document.createElement('div');
    header.className = 'practice-bank-header';
    header.innerHTML =
        '<p class="practice-bank-eyebrow">Beyond multiple choice</p>' +
        '<h2 id="practice-bank-title">Conceptual &amp; Numerical Practice</h2>' +
        '<p>Explain the ideas in your own words, and work through each problem before marking it practiced.</p>';
    section.appendChild(header);

    var controls = document.createElement('div');
    controls.className = 'practice-bank-controls';
    controls.setAttribute('aria-label', 'Practice question filters');
    controls.innerHTML =
        '<label>Search practice questions' +
            '<input type="search" data-practice-search placeholder="Search a topic or question">' +
        '</label>' +
        '<label>Question type' +
            '<select data-practice-type>' +
                '<option value="">All types</option>' +
                '<option value="conceptual">Conceptual</option>' +
                '<option value="numerical">Numerical</option>' +
            '</select>' +
        '</label>' +
        '<label>Chapter' +
            '<select data-practice-chapter><option value="">All chapters</option></select>' +
        '</label>' +
        '<div class="practice-bank-progress">' +
            '<span><strong data-practice-count>0</strong> / ' + questions.length + ' practiced</span>' +
            '<div class="practice-bank-progress-track" role="progressbar" aria-label="Practice questions completed" ' +
                'aria-valuemin="0" aria-valuemax="' + questions.length + '" aria-valuenow="0">' +
                '<span data-practice-progress></span>' +
            '</div>' +
        '</div>' +
        '<button type="button" class="practice-bank-reset" data-practice-reset>Reset practice progress</button>' +
        '<p class="practice-bank-status" data-practice-status aria-live="polite"></p>';
    section.appendChild(controls);

    var list = document.createElement('div');
    list.className = 'practice-bank-chapters';
    section.appendChild(list);

    var chapters = {};
    questions.forEach(function (question) {
        var key = String(question.chapter);

        if (!chapters[key]) {
            chapters[key] = {
                element: document.createElement('details'),
                groups: {},
                items: []
            };

            var chapterSummary = document.createElement('summary');
            chapterSummary.className = 'practice-chapter-summary';
            chapterSummary.textContent = chapterTitles[key] || 'Chapter ' + key;
            chapters[key].element.className = 'practice-chapter';
            chapters[key].element.appendChild(chapterSummary);
            list.appendChild(chapters[key].element);

            var chapterOption = document.createElement('option');
            chapterOption.value = key;
            chapterOption.textContent = chapterSummary.textContent;
            controls.querySelector('[data-practice-chapter]').appendChild(chapterOption);
        }

        var chapter = chapters[key];

        if (!chapter.groups[question.type]) {
            var group = document.createElement('details');
            var summary = document.createElement('summary');
            var groupList = document.createElement('div');

            group.className = 'practice-question-group';
            group.dataset.type = question.type;
            summary.textContent = typeLabels[question.type] || question.type;
            groupList.className = 'practice-question-list';
            group.appendChild(summary);
            group.appendChild(groupList);
            chapter.element.appendChild(group);
            chapter.groups[question.type] = {
                element: group,
                summary: summary,
                list: groupList,
                items: []
            };
        }

        var item = document.createElement('article');
        var prompt = document.createElement('p');
        var actionRow = document.createElement('div');
        var practiceButton = document.createElement('button');
        var sourceLink = document.createElement('a');

        item.className = 'practice-question';
        prompt.className = 'practice-question-prompt';
        prompt.textContent = question.question;
        actionRow.className = 'practice-question-actions';
        practiceButton.type = 'button';
        practiceButton.className = 'practice-mark-button';
        practiceButton.setAttribute('aria-pressed', 'false');
        practiceButton.textContent = 'Mark as practiced';
        sourceLink.href = 'Chapter' + key + '.html';
        sourceLink.textContent = 'Open chapter';
        actionRow.appendChild(practiceButton);
        actionRow.appendChild(sourceLink);
        item.appendChild(prompt);
        item.appendChild(actionRow);

        var record = {
            element: item,
            prompt: question.question.toLowerCase(),
            chapter: key,
            type: question.type,
            practiced: false,
            button: practiceButton,
            group: chapter.groups[question.type]
        };

        practiceButton.addEventListener('click', function () {
            record.practiced = !record.practiced;
            practiceButton.setAttribute('aria-pressed', String(record.practiced));
            practiceButton.textContent = record.practiced ? 'Practiced' : 'Mark as practiced';
            item.classList.toggle('is-practiced', record.practiced);
            updateProgress();
        });

        record.group.list.appendChild(item);
        record.group.items.push(record);
        chapter.items.push(record);
    });

    var searchInput = controls.querySelector('[data-practice-search]');
    var typeSelect = controls.querySelector('[data-practice-type]');
    var chapterSelect = controls.querySelector('[data-practice-chapter]');
    var status = controls.querySelector('[data-practice-status]');
    var progressCount = controls.querySelector('[data-practice-count]');
    var progressTrack = controls.querySelector('[role="progressbar"]');
    var progressBar = controls.querySelector('[data-practice-progress]');

    function updateProgress() {
        var practiced = questions.length - list.querySelectorAll('.practice-question:not(.is-practiced)').length;

        progressCount.textContent = String(practiced);
        progressTrack.setAttribute('aria-valuenow', String(practiced));
        progressBar.style.width = ((practiced / questions.length) * 100) + '%';
    }

    function applyFilters() {
        var term = searchInput.value.trim().toLowerCase();
        var selectedType = typeSelect.value;
        var selectedChapter = chapterSelect.value;
        var visibleCount = 0;

        Object.keys(chapters).forEach(function (key) {
            var chapter = chapters[key];
            var chapterCount = 0;

            chapter.items.forEach(function (item) {
                var visible = (!selectedChapter || item.chapter === selectedChapter) &&
                    (!selectedType || item.type === selectedType) &&
                    (!term || item.prompt.indexOf(term) !== -1);

                item.element.hidden = !visible;

                if (visible) {
                    chapterCount += 1;
                }
            });

            Object.keys(chapter.groups).forEach(function (type) {
                var group = chapter.groups[type];
                var groupCount = group.items.filter(function (item) {
                    return !item.element.hidden;
                }).length;

                group.element.hidden = groupCount === 0;
                group.summary.textContent = typeLabels[type] + ' (' + groupCount + ')';
            });

            chapter.element.hidden = chapterCount === 0;
            if (term || selectedChapter === key) {
                chapter.element.open = chapterCount > 0;
                Object.keys(chapter.groups).forEach(function (type) {
                    chapter.groups[type].element.open = chapterCount > 0;
                });
            }
            visibleCount += chapterCount;
        });

        status.textContent = visibleCount
            ? 'Showing ' + visibleCount + ' of ' + questions.length + ' practice questions.'
            : 'No practice questions match your filters.';
    }

    searchInput.addEventListener('input', applyFilters);
    typeSelect.addEventListener('change', applyFilters);
    chapterSelect.addEventListener('change', applyFilters);
    controls.querySelector('[data-practice-reset]').addEventListener('click', function () {
        list.querySelectorAll('.practice-question.is-practiced').forEach(function (item) {
            item.classList.remove('is-practiced');
        });
        list.querySelectorAll('.practice-mark-button[aria-pressed="true"]').forEach(function (button) {
            button.setAttribute('aria-pressed', 'false');
            button.textContent = 'Mark as practiced';
        });
        updateProgress();
    });

    var main = document.querySelector('main') || document.body;
    main.appendChild(section);
    updateProgress();
    applyFilters();

    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise([section]).catch(function (error) {
            console.error('Could not render equations in the practice question bank:', error);
        });
    }
})();
