function About() {
    {
     return (
       <div className="about-container">
         <h1 className="title-about ">About Me</h1>
         <img src="/images/profile.jpg" width={200} height={200} className="img-profile" alt="profile"/>

         <div className="description">
            <p > I am a junior Software Developer with a strong interest in programming. Currently, I am in my second year of pursuing a Computing Studies and Information Systems 
              Diploma at Douglas College. I am truly passionate about acquiring new knowledge and skills, and I find  joy in exploring innovative approaches to solving complex problems. 
              This journey in the realm of technology fuels my curiosity and drives me to continuously enhance my expertise in the field. <br></br>
               
            </p>
            <h3>Experience</h3>
            <p>My experience in IT includes working as a Data Developer , where I have had the valuable opportunity to work with data and craft solutions 
              that contribute to informed decision-making. Additionally, I have gained practical expertise by embarking on personal projects that align with the technologies I have been learning. 
              These projects have granted me hands-on experience and a deeper understanding of software development.
            </p>
        </div>
        <h2> Some Technologies  I have worked with</h2>

        <div className="container-technologies">
            <div className="container-soft-tech">
                <h3>Software development  technologies </h3>
                <img src="/images/java-Logo.png" width={60} height={60} className="img-tech" alt="java-logo"/>
                <img src="/images/python.png" width={200} height={120} className="img-python" alt="python"/>
                <img src="/images/JavaScript_logo.png" width={70} height={60} className="img-tech" alt="java-logo"/>
                <img src="/images/html-css.jpg" width={60} height={60} className="img-tech" alt="java-logo"/>
                <img src="/images/nodejs-1-logo.png" width={60} height={60} className="img-tech" alt="java-logo"/>
                <img src="/images/logo192.png" width={100} height={80} className="img-react" alt="java-logo"/> 
                <img src="/images/resApi.png" width={100} height={80} className="img-api" alt="java-logo"/>
                <img src="/images/git-logo.png" width={100} height={90} className="img-git" alt="java-logo"/>
                
            </div>

            <div className="container-data-tech">
                <h3>Data technologies </h3>
                
                <img src="/images/bigquery_logo.png" width={140} height={90} className="img-bq" alt="java-logo"/>
                <img src="/images/looker.png" width={170} height={120} className="img-looker" alt="java-logo"/>
                <img src="/images/MongoDB-Logo.jpg" width={180} height={100} className="img-mongo" alt="java-logo"/>
                <img src="/images/mysql-logo.png" width={160} height={80} className="img-mysql" alt="java-logo"/>
                <img src="/images/airflow.png" width={160} height={80} className="img-airflow" alt="java-logo"/>
            </div>



        </div>
       </div>
     );
   }
 }
 
 export default About;