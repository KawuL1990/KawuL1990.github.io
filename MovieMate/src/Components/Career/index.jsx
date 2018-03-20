import React from 'react';
import './style.css'

const Career = () => (
    <div className="Career">
        <table className="Career__table" border="2px" bordercolor="white" bgcoloe="white">
            <tbody>
                <tr className="Career__row">
                    <td className="Career__column">Front-end developer</td>
                    <td className="Career__column">
                        <ul className="Career__list">
                            <li className="Career__list__item">- Strong experience with HTML5, CSS3</li>
                            <li className="Career__list__item">- Deep knowledge of JavaScript</li>
                            <li className="Career__list__item">- Experience in Responsive Web Design</li>
                            <li className="Career__list__item">- Experience with Git</li>
                            <li className="Career__list__item">- Fluent in English both spoken and written</li>
                        </ul>
                    </td>
                </tr>
                <tr className="Career__row">
                    <td className="Career__column">Back-end developer</td>
                    <td className="Career__column">
                        <ul className="Career__list">
                            <li className="Career__list__item">- Understanding accessibility and security compliance</li>
                            <li className="Career__list__item">- User authentication and authorization between multiple systems and environments</li>
                            <li className="Career__list__item">- Integration of multiple data sources and databases into one system</li>
                            <li className="Career__list__item">- Data migration, transformation, and scripting</li>
                            <li className="Career__list__item">- Setup and administration of backups</li>
                            <li className="Career__list__item">- Proficient understanding of code versioning tools, such as Git</li>
                            <li className="Career__list__item">- Fluent in English both spoken and written</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);


export default Career;
