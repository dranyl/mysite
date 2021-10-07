import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
		title,
		date,
		place,
		description,
		projectType,
		link,
		tags
	}`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-gray-800 min-h-screen p-6'>
      <section className='container mx-auto'>
        <h1 className='text-5xl text-green-400 flex justify-center cursive mb-6'>
          Portfolio
        </h1>
        {/* <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Welcome to my projects page!
        </h2> */}

        <section className='grid grid-cols-2 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='relative rounded-lg shadow-xl bg-gray-500 p-4'>
                <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                  {project.title}
                </h3>
                <div className='text-gray-500 text-xs space-x-4'>
                  <span>
                    <strong className='fond-bold'>Finished on</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className='fond-bold'>Company</strong>:{' '}
                    {project.place}
                  </span>
                  <span>
                    <strong className='font-bold'>Type</strong>:{' '}
                    {project.projectType}
                  </span>
                  <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-red-500 font-bold hover:underline hover:text-red-400 text-xl'
                  >
                    More ...{' '}
                    <span role='img' aria-label='right pointer'>
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
