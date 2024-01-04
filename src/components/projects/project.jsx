import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import MediaDisplay from './MediaDisplay'; 
import "./styles/project.css";

const Project = (props) => {
    const { logo, title, description, linkText, link, videoUrl, imageUrls } = props;
    return (
        <React.Fragment>
            <div className="project">
                <div className="project-container">
                    <div className="project-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    
                    <div className="project-title">{title}</div>
                    <div className="project-description">skills:</div>
                    <div className="project-description">{description}</div>
                    
                    <MediaDisplay videoUrl={videoUrl} imageUrls={imageUrls} />

                    <Link to={link}>
                        <div className="project-link">
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <div className="project-link-text">{linkText}</div>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
