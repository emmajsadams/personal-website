import EXPERIENCES, { Experience } from '../../config/experiences'
import {
	EMAIL,
	GITLAB,
	LINKEDIN,
	NAME,
	PERSONAL_WEBSITE,
	PHONE_NUMBER,
} from '../../config/personalDetails'
import PROJECTS, { Project } from '../../config/projects'
import SCHOOLS, { School } from '../../config/schools'
import TECHNOLOGIES, { Technology } from '../../config/technologies'
import getExperience from './getExperience'
import getProject from './getProject'
import getSchool from './getSchool'
import getTechnology from './getTechnology'

const DOCUMENT_HEADER = `%-------------------------
% Resume
% Author: ${NAME}
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\usepackage{fontspec}
\\usepackage{unicode-math}

\\setmainfont{XITS}
[    Extension = .otf,
   UprightFont = *-Regular,
      BoldFont = *-Bold,
    ItalicFont = *-Italic,
BoldItalicFont = *-BoldItalic,
]

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[1]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\begin{document}

\\begin{center}
    \\textbf{\\Huge \\scshape ${NAME}} \\\\ \\vspace{1pt}
    \\href{tel:${PHONE_NUMBER}}{\\underline{${PHONE_NUMBER}}} $|$
    \\href{mailto:${EMAIL}}{\\underline{${EMAIL}}} \\\\ \\vspace{1pt}
    \\href{https://${PERSONAL_WEBSITE}}{\\underline{${PERSONAL_WEBSITE}}} $|$
    \\href{https://${LINKEDIN}}{\\underline{${LINKEDIN}}} $|$
    \\href{https://${GITLAB}}{\\underline{${GITLAB}}}
\\end{center}
`

function createSection<T>(
	getLatexFunc: (datum: T) => string,
	data: T[],
	sectionTitle: string,
): string {
	let output = `\\section{${sectionTitle}}
\\resumeSubHeadingListStart
`

	for (const datum of data) {
		output += getLatexFunc(datum) + '\n'
	}

	output += '  \\resumeSubHeadingListEnd\n'

	return output
}

function createItemizedSection<T>(
	getLatexFunc: (datum: T) => string,
	data: T[],
	sectionTitle: string,
): string {
	let output = `\\section{${sectionTitle}}
\\begin{itemize}[leftmargin=0.15in, label={}]
\\small{\\item{
`

	for (const datum of data) {
		output += getLatexFunc(datum) + '\n'
	}

	output += `}}
\\end{itemize}
`

	return output
}

// TODO: get rid of unnecessary spacing since indentation does not matter
export default function getResume(): string {
	let resume = DOCUMENT_HEADER
	resume += createSection<School>(getSchool, SCHOOLS, 'Education')
	resume += createSection<Experience>(getExperience, EXPERIENCES, 'Experience')
	resume += createSection<Project>(getProject, PROJECTS, 'Projects')
	resume += createItemizedSection<Technology>(
		getTechnology,
		TECHNOLOGIES,
		'Technical Skills',
	)
	resume += '\n \\end{document}'
	resume = resume.replace(/C#/g, 'C\\#')

	return resume
}
