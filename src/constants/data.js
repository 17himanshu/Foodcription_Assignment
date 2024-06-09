import images from './images';
import { Link } from 'react-router-dom';

const Menu = [
    {
        text: 'About us',
        link: '#team',
    },
    {
        text: 'Services',
        link: '#services',
    },
    {
        text: 'Efficient Hire',
        link: '#use-cases',
    },
    {
        text: 'Process',
        link: '#process',
    },

    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Find Candidate',
        link: '/filtercandidate',
    },
    {
        text: 'Login/Sign Up',
        link:  '/signup'
    }
];
const ServicesData = [
    {
        titleone: 'ATS (Applicant ',
        titletwo: 'Tracking System)',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Pay-per-click',
        titletwo: 'Job Ads',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Social',
        titletwo: 'Recruitment',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Job Alert',
        titletwo: 'Emails',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'User-Friendly',
        titletwo: 'Interface',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'AI Powered',
        titletwo: 'Analytics',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text:'For a leading tech startup, we reduced time-to-hire by 40% and increased candidate quality by 30% through our job portal.',
        link: '#',
    },
    {
        text:'We helped a mid-sized financial institution boost qualified applicants by 50% and cut recruitment costs by 25% with our targeted job posting strategy.',
        link: '#',
    },
    {
        text: 'A global consulting firm saw a 75% fill rate for open positions and a 20% increase in new business revenue after accessing our pool of pre-screened candidates.',
        link: '#',
    },
];

const WorkingProcess = [
    {
        title: 'Company Profiling',
        description:'We get to know your company\'s unique needs, culture, and goals to tailor our services to your specific requirements.'
    },
    {
        title: 'Job Description Development',
        description: 'Our experts craft compelling job descriptions that showcase your company\'s opportunities and attract top talent.',
    },
    {
        title: 'Candidate Sourcing',
        description: 'We utilize our vast network and advanced technology to source and attract the best candidates for your open positions.',
    },
    {
        title: 'Application Management',
        description: 'Our team efficiently manages the application process, ensuring that only the most qualified candidates move forward.',
    },
    {
        title: 'Interview Coordination',
        description: 'We streamline the interview process, scheduling and coordinating interviews to ensure a seamless experience for both your team and candidates.',
    },
    {
        title: 'Onboarding and Support',
        description: 'We provide ongoing support to ensure a smooth transition for new hires and continue to monitor and optimize our services to meet your evolving needs.',
    },

];

const Team = [
    {
        name: 'John Smith',
        position: 'CEO and Founder',
        info: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Jane Doe',
        position: 'Director of Operations',
        info: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        info: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        foto: images.team03,
        linkedin: '#',
    },
    {
        name: 'Emily Johnson',
        position: 'PPC Manager',
        info: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        foto: images.team04,
        linkedin: '#',
    },
    {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        foto: images.team05,
        linkedin: '#',
    },
    {
        name: 'Sarah Kim',
        position: 'Content Creator',
        info: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        foto: images.team06,
        linkedin: '#',
    },

];

const Testimonials = [
    {
        name: 'Emily Chen',
        position: 'Talent Acquisition Manager at TechCorp',
        testimonial: '"We were struggling to find the right candidates for our open positions, but after partnering with Recruit Karo, we saw a significant improvement in the quality of applicants. Their candidate onboarding strategies are top-notch and have greatly benefited our business."',
    },
    {
        name: 'David Lee',
        position: 'HR Manager at FinServe Inc.',
        testimonial: '"Recruit Karo has been a game-changer for our hiring process. Their team is highly responsive and has a deep understanding of our business needs. We\'ve seen a significant reduction in time-to-hire and an increase in candidate satisfaction."',
    },
    {
        name: 'Sarah Taylor',
        position: 'Recruiting Manager at HealthPro',
        testimonial: '"We were impressed by Recruit Karo\'s ability to understand our unique hiring needs and tailor their onboarding strategies to meet those needs. Their expertise has helped us attract and retain top talent in the industry."',
    },
    {
        name: 'Michael Brown',
        position: 'CEO at StartUpX',
        testimonial: '"As a startup, we needed a hiring partner that could move quickly and efficiently. Recruit Karo has exceeded our expectations, providing us with a pipeline of qualified candidates and streamlining our onboarding process. We couldn\'t be happier with the results."',
    },
];
export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData };