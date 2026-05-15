export default function Services() {
    const services = [
    {
        name: 'Frontend Development',
        icon: '/assets/web-icon.png',
        description:
            'Modern responsive web applications using React, Next.js and Tailwind CSS with clean UI and optimized performance.',
    },
    {
        name: 'Backend Development',
        icon: '/assets/web-icon.png',
        description:
            'Build scalable backend APIs, authentication systems, databases and server-side applications.',
    },
    {
        name: 'Fullstack Web Applications',
        icon: '/assets/web-icon.png',
        description:
            'End-to-end web applications with frontend, backend, database integration and deployment workflows.',
    },
    {
        name: 'API Development',
        icon: '/assets/web-icon.png',
        description:
            'Design and integrate secure REST APIs with authentication, data validation and third-party services.',
    },
    {
        name: 'Database Design',
        icon: '/assets/web-icon.png',
        description:
            'Create efficient database architectures using MongoDB, PostgreSQL and modern ORM solutions.',
    },
    {
        name: 'Deployment & Optimization',
        icon: '/assets/web-icon.png',
        description:
            'Deploy scalable applications with performance optimization, SEO improvements and cloud hosting.',
    },
];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a fullstack developer with expertise in both frontend and backend technologies. I can help you build scalable and maintainable web applications.</p>

            <div className="grid grid-cols-3 gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>                       
                    </div>
                ))}
            </div>
        </div>
    )
}