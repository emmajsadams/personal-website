// TODO: CONSIDER adding years for each skill
export interface Technology {
	category: string
	technologies: string[]
}

export const Languages: Technology = {
	category: 'Languages',
	technologies: [
		'TypeScript',
		'JavaScript',
		'C#',
		'Python',
		'HTML',
		'CSS',
		'SQL',
		'C',
		'Bash',
	],
}

export const Frameworks: Technology = {
	category: 'Frameworks',
	technologies: [
		'Next.JS',
		'React',
		'Vue.js',
		'Flask',
		'Starlette',
		'ASP.NET MVC',
	],
}

export default [Languages, Frameworks]

/*
% 
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: } \\
      \textbf{Frameworks}{: } \\
     \textbf{Libraries}{: TailwindCSS, PostCSS, pandas, NumPy, TensorFlow, GPT-2} \\
     \textbf{Developer Tools}{: VSCode, Visual Studio Git, ESLint, Prettier, Docker, Kubernetes, Chef, Yarn, npm, cmake, gcc} \\
     \textbf{Databases}{: PostgreSQL, MSSQL, MySQL, Elasticsearch} \\
     \textbf{Cloud Providers}{: AWS, GCE, Azure, Vercel, DigtalOcean, Cloudflare (workers, CDN, DNS), Akamai} \\
    }}
 \end{itemize}
*/
