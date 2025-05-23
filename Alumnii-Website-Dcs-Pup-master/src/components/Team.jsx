import { Link } from "react-router-dom";

function TeamCard({ img, name, title, designation, institution, linkedIn }) {
    return (
        <div className="rounded-lg bg-[#FAFAFA] shadow-md">
            <div className="p-6 text-center">
                <img
                    src={img}
                    alt={name}
                    className="size-40 mx-auto mb-6 rounded-full object-cover"
                />
                <h5 className={`text-lg font-medium `}>{name}</h5>
                <p className="text-base font-semibold text-gray">{title}</p>
                <p className="text font-semibold text-gray">{designation}</p>
                <p className="mb-3 text-base font-semibold text-gray">{institution}</p>
                <span className={` italic underline font-semibold text-sm ${linkedIn? 'hover:text-darkBlue': 'hidden'}`}><Link to={linkedIn} target="blank">Reach Us</Link></span>

                
            </div>
        </div>
    );
}

const members = [
    {
        img: "/images/vishalSir.jpg",
        name: "Dr. Vishal Goyal",
        title: "Professor",
        institution: "Department of Computer Science, Punjabi University, Patiala",
        linkedIn: "https://www.linkedin.com/in/vishal-goyal-0012516/",
    },
    {
        img: "/images/vipinKumar.jpg",
        name: "Mr. Vipin kumar",
        title: "Technical Assistant",
        institution: "Department of Computer Science, Punjabi University, Patiala",
    },
    {
        img: "/images/kanika.jpg",
        name: "Kanika Bhatia",
        title: "Student",
        designation: "Developer",
        institution: "MCA, Department of Computer Science, Punjabi University, Patiala",
        linkedIn: "https://www.linkedin.com/in/kanika-bhatia08/",
    },
    {
        img: "/images/abhinash_team.jpeg",
        name: "Abhinash",
        title: "Student",
        designation: "Team Lead, Developer",
        institution: "MCA, Department of Computer Science, Punjabi University, Patiala",
        linkedIn: "https://www.linkedin.com/in/abhinash99/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        img: "/images/harman.jpg",
        name: "Harmandeep Singh",
        title: "Student",
        designation: "Team Lead, Developer",
        institution: "MCA, Department of Computer Science, Punjabi University, Patiala",
        linkedIn: "https://www.linkedin.com/in/harmandeep-singh-saggu-8562a12b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        img: "/images/purvak.jpg",
        name: "Purvak Jindal",
        title: "Student",
        designation: "Developer",
        institution: "MCA, Department of Computer Science, Punjabi University, Patiala",
        linkedIn: "https://www.linkedin.com/in/purvak-jindal-6741682a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    }
];

export function Team() {
    return (
        <section className="max-w-[95%] md:max-w-[85%] w-full flex mx-auto lg:pb-28">
            <div className=" mx-auto">
                <div className="mb-16 text-center lg:mb-28">
                    <h1 className="my-2 text-2xl font-mons font-bold text-darkBlue lg:text-4xl">
                    The Driving Force <br/>Our Dedicated Team of Experts (Session 2024-26)
                    </h1>
                    <p className="w-full ">
                    From visionary leaders to creative thinkers and technical experts, every member of our team is dedicated to delivering innovative solutions and exceptional service that drives our success.
                    </p>
                </div>
                <div className="w-[90%] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 justify-center lg:grid-cols-3">
                    {members.map((props, key) => (
                        <TeamCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
