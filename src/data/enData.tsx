import { DataModel } from './type'

export const data: DataModel = {
  head: {
    title: 'Ramin Ashouri',
    description: 'Ramin Ashouri, a Frontend developer',
  },
  generalInfo: {
    fullName: 'Ramin Ashouri',
    formattedMobile: '+1 778 970 3373',
    emailLabel: 'Email',
    email: 'ramin.ashouritaghi@gmail.com',
    mobileLabel: 'Mobile',
    mobile: '+17789703373',
    LinkedinLabel: 'Linkedin',
    Linkedin: 'Ramin Ashouri',
    githubLabel: 'Github',
    github: 'ramin-03',
    jobPosition: 'Front-End Developer',
  },
  keySkills: {
    skills: [
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Sass',
      'React',
      'webpack',
      'rollup',
      'Git',
      'Shopify',
      'Wordpress',
      'Gulp',
    ],
    title: 'Key skills',
  },
  skillsSummary: {
    title: 'Skills summary',
    points: [
      <>
        Frontend Development: Proficient in developing user interfaces for E-commerce, web applications, and interactive
        software products.
      </>,
      <>
        Technologies: Extensive experience with
        <strong>
          {' '}
          HTML, CSS, TypeScript, JavaScript, React, Sass, webpack, rollup, Git, Shopify, Wordpress, Gulp.
        </strong>
      </>,
      <>
        Developer Experience: 3 years of experience in creating <strong>user-friendly interfaces</strong>, facilitating
        smooth collaboration, and code integration.
      </>,
      <>
        Team Collaboration: Strong teamwork skills, adept at working effectively as part of a team, using
        <strong> Agile methodologies</strong> to meet project goals and deadlines.
      </>,
      <>Quality Assurance: Implementing best practices for code quality and testing.</>,
      <>
        High-Pressure Environments: Demonstrated ability to thrive and deliver exceptional results even under tight
        deadlines and high-pressure situations, maintaining a focus on quality.
      </>,
    ],
  },
  experience: {
    title: 'Professional Experience',
    noEndDateText: 'October 2023',
    items: [
      {
        title: 'Intelligence Advance Solutions (Asre DaneshAfzar)',
        position: 'Frontend developer',
        startDate: 'January 2023',
        ISOStartDate: '2023-01-05T00:00:00.000Z',
        location: 'Remote to Czech',
        url: 'https://iasolution.cz/',
        description: (
          <>
            During my tenure at Intelligence Advance Solutions (IAS), a prominent Czech Republic-based IT company, I
            played a key role in developing the Elegance Theme for the jewelry industry. Notable contributions include:
          </>
        ),
        points: [
          <>Led the creation of a bespoke Shopify theme for the jewelry industry.</>,
          <>
            Utilized modern development tools <strong>(TypeScript, Preact, web components)</strong> for high
            performance.
          </>,
          <>Integrated the existing store with other services through collaboration with external teams.</>,
          <>
            Optimized project efficiency with tools like <strong>Rollup</strong> and <strong>SWC</strong>, resulting in
            a tenfold acceleration in the build process.
          </>,
          <>
            Implemented <strong>responsive design</strong> principles for an enhanced user experience.
          </>,
          <>
            Ensured <strong>cross-browser compatibility</strong> for a seamless website across different browsers.
          </>,
          <>
            Adhered to <strong>Accessibility Standards</strong>, ensuring the website's inclusivity and usability for
            users with disabilities.
          </>,
        ],
        techStack: ['Typescript', 'React', 'Preact', 'Shopify', 'SASS', 'Rollup', 'Shopify'],
      },
      {
        title: 'Parasteh',
        position: 'Frontend Developer',
        startDate: 'December 2021',
        ISOStartDate: '2021-12-02T00:00:00.000Z',
        endDate: 'January 2023',
        ISOEndDate: '2023-01-02T00:00:00.000Z',
        location: 'Tehran - Iran',
        url: 'https://parasteh.com/',
        description: (
          <>
            As a Frontend Developer at Parasteh, a prominent Jewelry <strong>E-commerce</strong> Website, I collaborated
            within a team to achieve significant milestones in the <strong>redesign and development</strong> of critical
            sections, including the Product Page and Collection Page. Notable contributions include:
          </>
        ),
        points: [
          <>Customized and developed a WordPress theme for a prominent Jewelry E-commerce website.</>,
          <>Improved user experience and initial load time, collaborating closely with SEO and marketing managers.</>,
          <>
            Transitioned from <strong>jQuery</strong> to <strong>vanilla javascript</strong> for enhanced javascript
            performance and reduced bundle size.
          </>,
          <>
            Utilized <strong>Gulp</strong> to optimize the first-time interactive experience.
          </>,
          <>
            Implemented <strong>performance optimization</strong> techniques for faster website loading.
          </>,
          <>
            Ensured <strong>cross-browser compatibility</strong> for a consistent user experience.
          </>,
        ],
        techStack: ['Javascript', 'HTML', 'SASS', 'Figma', 'Git', 'PHP', 'Gulp', 'Bootstrap', 'Wordpress'],
      },
      {
        title: 'Talabash',
        position: 'Frontend Developer',
        startDate: 'November 2021',
        endDate: 'January 2023',
        ISOStartDate: '2021-11-02T00:00:00.000Z',
        ISOEndDate: '2023-01-02T00:00:00.000Z',
        location: 'Tehran - Iran',
        url: 'https://talabash.com/',
        description: (
          <>
            As a Frontend Developer at TalaBash, a jewelry marketplace developed using <strong>WordPress</strong> with a{' '}
            <strong>custom routing system</strong>, I contributed significantly to the website's redesign and
            development. Key achievements include:
          </>
        ),
        points: [
          <>Contributed significantly to the redesign and development of a jewelry marketplace using WordPress.</>,
          <>Collaborated effectively in redesigning sections like the Product Page and Collection Page.</>,
          <>Developed complex UI components such as a form generator and online file system UI.</>,
          <>Improved user experience by enhancing initial load time and resolving issues with fast refresh.</>,
          <>
            Improved javascript performance by transitioning from <strong>jQuery</strong> to
            <strong> vanilla javascript</strong> and using tools like <strong>Gulp</strong>.
          </>,
          <>
            Implemented <strong>responsive design</strong> principles for optimal viewing across various devices.
          </>,
        ],
        techStack: ['HTML', 'SASS', 'Gulp', 'Figma', 'Git', 'PHP', 'Javascript', 'jQuery', 'Wordpress'],
      },
    ],
  },
  AdditionalEnhancements: {
    title: 'Additional Enhancements',
    points: [
      <>Achieved a 15% improvement in Parasteh's initial load time, enhancing user satisfaction.</>,
      <>Enhanced the project's accessibility, resulting in a 20% increase in overall user engagement.</>,
      <>
        Successfully implemented responsive design principles, leading to a 25% improvement in mobile user experience.
      </>,
      <>
        Ensured cross-browser compatibility, resulting in a 12% reduction in user-reported issues across different
        browsers.
      </>,
    ],
  },
}
