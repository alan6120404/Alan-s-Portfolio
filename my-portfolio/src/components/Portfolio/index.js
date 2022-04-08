import React from 'react';
 
function Portfolio() {
  const photos = [
    {
      name: 'Project Run Buddy',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://github.com/alan6120404/run-buddy.git'
    },
    {
      name: 'just-tech-news',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://github.com/alan6120404/just-tech-news.git'
    },
    {
      name: 'Note-Taker',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://github.com/alan6120404/Note-Taker.git'
    },
    {
      name: 'Employee Tracker',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://github.com/alan6120404/Employee-Tracker.git'
    },
    {
      name: 'take-a-hike',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://github.com/alan6120404/take-a-hike.git'
    },
    {
      name: 'Code-Quiz',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://github.com/alan6120404/Code-Quiz.git'
    },
    {
      name: 'Book Search Engine',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      link: 'https://github.com/alan6120404/Book-Search-Engine.git'
    }
  ];

  return (
    <section className='text-center'>
      <h1>Portfolio</h1>
      <div className="flex-row justify-content-around">
        {photos.map((image, i) => (
          <>
            <div>
              <h2>{image.name}</h2>
                <div class="hover11 column">
                  <figure>
                    <a href={image.link}>
                      <img
                        src={require(`../../assets/gallery/${i}.jpeg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name} />
                    </a>
                  </figure>
                </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;