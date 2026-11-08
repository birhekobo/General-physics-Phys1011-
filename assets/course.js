(function () {
    'use strict';

    var CHAPTERS = [
        { number: 1, title: 'Preliminaries', file: 'Chapter1.html' },
        { number: 2, title: 'Kinematics in One Dimension', file: 'Chapter2.html' },
        { number: 3, title: 'Kinematics in Two Dimensions', file: 'Chapter3.html' },
        { number: 4, title: 'Dynamics', file: 'Chapter4.html' },
        { number: 5, title: 'Gravitation and Kepler\u2019s Laws of Motion', file: 'Chapter5.html' },
        { number: 6, title: 'Work and Energy', file: 'Chapter6.html' },
        { number: 7, title: 'Linear Momentum', file: 'Chapter7.html' },
        { number: 8, title: 'Fluid Mechanics', file: 'Chapter8.html' },
        { number: 9, title: 'Heat and Thermodynamics', file: 'Chapter9.html' },
        { number: 10, title: 'Oscillations and Waves', file: 'Chapter10.html' },
        { number: 11, title: 'Electromagnetism and Electronics', file: 'Chapter11.html' },
        { number: 12, title: 'Geometrical Optics', file: 'Chapter12.html' },
        { number: 13, title: 'Cross-Cutting Application of Physics', file: 'Chapter13.html' }
    ];

    var currentFile = (window.location.pathname.split('/').pop() || 'index.html').split('?')[0].split('#')[0];
    var THEME_KEY = 'freshmanPhysics.theme';
    var themeToggle = null;
    var mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

    function storedTheme() {
        try {
            var value = window.localStorage.getItem(THEME_KEY);
            return value === 'dark' || value === 'light' ? value : '';
        } catch (error) {
            void error;
            return '';
        }
    }

    function updateThemeToggle(theme) {
        if (!themeToggle) {
            return;
        }

        var isDark = theme === 'dark';
        var label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

        themeToggle.innerHTML = '<span aria-hidden="true">' + (isDark ? '\u2600' : '\u263e') + '</span>';
        themeToggle.setAttribute('aria-label', label);
        themeToggle.setAttribute('title', label);
    }

    function applyTheme(theme, persist) {
        var next = theme === 'dark' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', next);
        updateThemeToggle(next);

        if (persist) {
            try {
                window.localStorage.setItem(THEME_KEY, next);
            } catch (error) {
                void error;
            }
        }
    }

    applyTheme(storedTheme() || (mediaQuery && mediaQuery.matches ? 'dark' : 'light'), false);

    if (/^Chapter\d+\.html$/.test(currentFile)) {
        var quizScript = document.createElement('script');
        quizScript.src = 'assets/quiz.js';
        quizScript.onload = function () {
            var blankScript = document.createElement('script');
            blankScript.src = 'assets/fill-blanks.js';
            blankScript.onload = function () {
                var tfScript = document.createElement('script');
                tfScript.src = 'assets/true-false.js';
                document.head.appendChild(tfScript);
            };
            document.head.appendChild(blankScript);
        };
        document.head.appendChild(quizScript);
    }

    var available = CHAPTERS.filter(function (chapter) {
        return chapter.available !== false;
    });
    var current = null;
    var currentIndex = -1;

    available.forEach(function (chapter, index) {
        if (chapter.file === currentFile) {
            current = chapter;
            currentIndex = index;
        }
    });

    var previous = currentIndex > 0 ? available[currentIndex - 1] : null;
    var next = currentIndex > -1 && currentIndex < available.length - 1 ? available[currentIndex + 1] : null;

    if (current) {
        try {
            window.localStorage.setItem('freshmanPhysics.lastChapter', JSON.stringify({
                number: current.number,
                title: current.title,
                file: current.file
            }));
        } catch (error) {
            void error;
        }
    }

    function padNumber(value) {
        return value < 10 ? '0' + value : String(value);
    }

    function optionMarkup() {
        var options = ['<option value="">Jump to a chapter\u2026</option>'];

        CHAPTERS.forEach(function (chapter) {
            if (chapter.available === false) {
                options.push(
                    '<option disabled>' +
                    padNumber(chapter.number) + ' \u00b7 ' + chapter.title + ' (coming soon)' +
                    '</option>'
                );
                return;
            }

            var selected = current && chapter.file === current.file ? ' selected' : '';
            options.push(
                '<option value="' + chapter.file + '"' + selected + '>' +
                padNumber(chapter.number) + ' \u00b7 ' + chapter.title +
                '</option>'
            );
        });

        return options.join('');
    }

    var header = document.createElement('header');
    header.className = 'course-header';
    header.innerHTML =
        '<div class="course-header-inner">' +
            '<a class="course-brand" href="index.html" aria-label="Freshman Physics home">' +
                '<span class="course-brand-mark" aria-hidden="true">\u03a6</span>' +
                '<span>' +
                    '<span class="course-brand-title">Freshman Physics</span>' +
                    '<span class="course-brand-sub">Interactive course</span>' +
                '</span>' +
            '</a>' +
            '<div class="course-nav-center">' +
                '<label class="sr-only" for="course-chapter-select">Jump to a chapter</label>' +
                '<select class="course-select" id="course-chapter-select">' + optionMarkup() + '</select>' +
            '</div>' +
            '<div class="course-nav-links">' +
                (current
                    ? (previous
                        ? '<a href="' + previous.file + '" aria-label="Previous chapter: ' + previous.title + '">\u2190 <span class="nav-word">Prev</span></a>'
                        : '<span class="is-disabled">\u2190 <span class="nav-word">Prev</span></span>') +
                      '<a href="index.html">Contents</a>' +
                      (next
                        ? '<a href="' + next.file + '" aria-label="Next chapter: ' + next.title + '"><span class="nav-word">Next</span> \u2192</a>'
                        : '<span class="is-disabled"><span class="nav-word">Next</span> \u2192</span>')
                    : (currentFile === 'index.html'
                        ? '<a href="Chapter1.html">Start course \u2192</a>'
                        : '<a href="index.html">Contents</a>')) +
                '<a href="CourseOutline.html">Course outline</a>' +
                '<button type="button" class="theme-toggle" data-theme-toggle aria-label="Switch to dark theme" title="Switch to dark theme">' +
                    '<span aria-hidden="true">\u263e</span>' +
                '</button>' +
            '</div>' +
            '<div class="course-progress" aria-hidden="true"></div>' +
        '</div>';

    document.body.prepend(header);
    document.body.classList.add('has-course-nav');

    themeToggle = header.querySelector('[data-theme-toggle]');
    updateThemeToggle(document.documentElement.getAttribute('data-theme') || 'light');
    themeToggle.addEventListener('click', function () {
        applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });

    var main = document.querySelector('main');

    if (!main) {
        main = document.createElement('main');
        main.id = 'main-content';
        main.setAttribute('tabindex', '-1');

        Array.prototype.slice.call(document.body.childNodes).forEach(function (node) {
            if (node === header) {
                return;
            }

            main.appendChild(node);
        });

        document.body.appendChild(main);
    } else {
        if (!main.id) {
            main.id = 'main-content';
        }

        main.setAttribute('tabindex', '-1');
    }

    var skipLink = document.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to content';
    document.body.insertBefore(skipLink, header);

    Array.prototype.forEach.call(document.querySelectorAll('svg'), function (svg) {
        if (svg.hasAttribute('role') || svg.hasAttribute('aria-hidden')) {
            return;
        }

        var caption = svg.parentNode ? svg.parentNode.querySelector('.figure-caption') : null;
        var label = caption ? caption.textContent.replace(/\s+/g, ' ').trim() : '';

        if (label) {
            svg.setAttribute('role', 'img');
            svg.setAttribute('aria-label', label);
        } else {
            svg.setAttribute('aria-hidden', 'true');
            svg.setAttribute('focusable', 'false');
        }
    });

    function syncHeaderSpace() {
        document.body.style.paddingTop = (header.offsetHeight + 20) + 'px';
    }

    window.requestAnimationFrame(syncHeaderSpace);
    window.addEventListener('resize', syncHeaderSpace);

    var select = header.querySelector('.course-select');
    select.addEventListener('change', function () {
        if (select.value) {
            window.location.href = select.value;
        }
    });

    var progress = header.querySelector('.course-progress');

    function updateProgress() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        var scrollable = document.documentElement.scrollHeight - window.innerHeight;
        var percentage = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;

        progress.style.width = Math.max(0, Math.min(100, percentage)) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    if (current) {
        var pager = document.createElement('nav');
        pager.className = 'chapter-pager';
        pager.setAttribute('aria-label', 'Chapter navigation');

        var previousMarkup = previous
            ? '<a class="pager-prev" href="' + previous.file + '">' +
                '<span class="pager-label">Previous</span>' +
                '<span class="pager-title">' + previous.number + '. ' + previous.title + '</span>' +
              '</a>'
            : '<span class="pager-prev pager-disabled">' +
                '<span class="pager-label">Previous</span>' +
                '<span class="pager-title">Start of course</span>' +
              '</span>';

        var nextMarkup = next
            ? '<a class="pager-next" href="' + next.file + '">' +
                '<span class="pager-label">Next</span>' +
                '<span class="pager-title">' + next.number + '. ' + next.title + '</span>' +
              '</a>'
            : '<span class="pager-next pager-disabled">' +
                '<span class="pager-label">Next</span>' +
                '<span class="pager-title">End of course</span>' +
              '</span>';

        pager.innerHTML = previousMarkup + nextMarkup;
        document.body.appendChild(pager);
    }

    var startLink = document.querySelector('[data-course-start]');

    if (startLink) {
        try {
            var lastChapter = JSON.parse(window.localStorage.getItem('freshmanPhysics.lastChapter') || 'null');

            if (lastChapter && lastChapter.file && lastChapter.number > 1) {
                startLink.href = lastChapter.file;
                startLink.textContent = 'Continue Chapter ' + lastChapter.number;
            }
        } catch (error) {
            void error;
        }
    }
})();
