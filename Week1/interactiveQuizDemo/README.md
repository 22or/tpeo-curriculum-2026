# Interactive Quiz Demo

This folder contains a completed version of the combined Week 1 and Week 2 demo, built as a JavaScript-first interactive quiz.

## Materials

- Day 1: Setup and Git — https://docs.google.com/presentation/d/19g41pTzYZHZ_H7LoDEGIEGVVcqcFhQpM/edit?usp=sharing&ouid=110610902024720430927&rtpof=true&sd=true
- Day 2: HTML/CSS/JS — https://docs.google.com/presentation/d/1qtcXRywNnh0bUHZgLmQHUG5wjTqJaTEb/edit?usp=sharing&ouid=110610902024720430927&rtpof=true&sd=true

## What it teaches
- HTML structure and semantic grouping
- CSS layout, spacing, answer states, and responsive behavior
- JavaScript events, DOM rendering, state management, and scoring

## Teaching flow
1. Build the page shell and quiz card in HTML.
2. Add the quiz layout and visual theme in CSS.
3. Render the questions and handle answers in JavaScript.
4. Restart the quiz and discuss how the state changes.

## Week 1 — Day 1: Setup & Git (quick reference)

These are the Day 1 setup resources and Git basics used in class. Keep this section at the top of your lesson materials so students can get their environment ready before Day 2.

- Slides and setup guide: https://docs.google.com/presentation/d/19g41pTzYZHZ_H7LoDEGIEGVVcqcFhQpM/edit?usp=sharing&ouid=110610902024720430927&rtpof=true&sd=true

- Essential setup checklist:
	- Install VS Code (or your preferred editor)
	- Install Git and configure your name/email:

```powershell
git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

	- (Optional) Install the Live Server extension for quick HTML preview in VS Code.

- Quick Git workflow reminders used on Day 1:

```powershell
git clone <repo-url>
git branch
git checkout -b feature/your-task
git add <file>
git commit -m "short message"
git push -u origin feature/your-task
```

## Week 1 — Day 2: HTML, CSS & JavaScript (consolidated)

This demo is designed to be used for Day 2 where HTML, CSS, and JavaScript are taught together as a single cohesive exercise.
Use the sections below to guide an in-class, live-coding flow that emphasizes how the three layers build on each other.

- HTML: structure the quiz card, use semantic grouping (`fieldset`, `legend`), and add accessible labels.
- CSS: layout with Flexbox/CSS Grid, spacing (box model), and visual states for correct/incorrect answers.
- JavaScript: render questions, attach event listeners, manage quiz state, and update the DOM.

Each of the `TEMPLATE POINT` comments in the code marks a natural hand-off for students during live coding.

## Quick Commands & Tools

Use these during the lesson or share them in the classroom for students to run locally.

- Check Node.js is installed:

```powershell
node -v
```

- Run a JavaScript file locally (for testing non-DOM logic):

```powershell
# from the folder containing the JS file
node script.js
```

- Open the HTML file in a browser (double-click the file in the file explorer) or use the Live Server extension for a live reload experience.

- VS Code Live Server quick commands:

```text
Install the Live Server extension → Right-click index.html → Open with Live Server
```

- Basic terminal navigation and file checks (cross-platform):

```powershell
# Windows
cd path\to\project
dir

# Mac/Linux
cd path/to/project
ls
```

- Git quick reminders (use in repository exercises):

```powershell
git add <file>
git commit -m "your message"
git push
git pull
```

## Where to add Homework

Leave new Week 1 homework files and instructions in the central Week 1 folder so they are easy to find. Suggested location:

```
Week1/homework/    <-- add new homework files and README describing the assignment
```

Do not modify existing `hw` sections elsewhere for now — add new homework into the `Week1/homework` folder and update the main Week 1 README when you're ready.

## Template points
- `index.html`: intro and quiz shell markers
- `styles.css`: theme and layout marker
- `script.js`: questions array, event wiring, and behavior markers