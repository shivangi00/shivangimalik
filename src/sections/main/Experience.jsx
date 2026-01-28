function Experience () {
    return (
        <section id="experience" className="achievements-block">
            <div className="section-header">
                <h3>Experience</h3>
                <a
                href="../../public/ShivangiMalik.pdf" // update to your real CV path
                className="download-cv-link"
                target="_blank"
                rel="noreferrer"
                >
                <i className="fa-solid fa-download"></i> Download CV
                </a>
            </div>
            <div className="ach-row">
                <span>2024 - 2025</span>
                <div>
                    <p>SanDisk</p>
                    <p className="ach-meta">Senior Software Engineer</p><br />
                    <p className="ach-meta ach-txt">Led development of an Appium–Spring Boot test framework where a central Spring Boot server triggered Java 
                        test suites via APIs to 200+ Android devices connected across 6 Windows lab machines, validating microSD 
                        card compatibility and stability. This distributed setup, built with OOP and DSA-driven Java test code and 
                        used by cross-functional teams, improved project scalability by 90% and cut test turnaround from 3 weeks to 3
                        days (96% reduction).
                    </p><br />
                </div>
            </div>
            <div className="ach-row">
                <span>2022 - 2024</span>
                <div>
                    <p>SanDisk (formerly Western Digital)</p>
                    <p className="ach-meta">Software Engineer</p><br />
                    <p className="ach-meta ach-txt">Led development of an Appium–Spring Boot test framework where a central Spring Boot server triggered Java 
                        test suites via APIs to 200+ Android devices connected across 6 Windows lab machines, validating microSD 
                        card compatibility and stability. This distributed setup, built with OOP and DSA-driven Java test code and 
                        used by cross-functional teams, improved project scalability by 90% and cut test turnaround from 3 weeks to 3
                        days (96% reduction).
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Experience;