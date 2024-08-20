"use client";
import Topbar from "@/app/components/Topbar";
import styles from "../chatbots/page.module.css";
import React from "react";

export default function ChatBotsPage() {
  const [open, setOpen] = React.useState(true);
  const drawerWidth = 240;

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Topbar
          open={open}
          drawerWidth={drawerWidth}
          toggleDrawer={toggleDrawer}
        />
        <div style={{ color: '#000', margin: '25px 25px 25px 290px' }}>
          <div>
            <h1>🚀 JOSEPH PROJECT - Gemini API Developer Competition - #buildwithgemini</h1>
            <p><strong>Gemini Express App</strong></p>
            <p>This is a Node.js application built with Express that integrates Google's Gemini AI API.</p>
            <img src="/background.jpeg" alt="Gemini Express App" style={{ width: 650, height: 350 }} />
          </div>

          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <h2>🌟 Features</h2>

            <div style={{ margin: 25 }}>
              <ul>
                <li>Integration with Google's Gemini AI API</li>
                <li>Support for live reload using <code>nodemon</code></li>
                <li>Modeling and data science with Python and R (<i>for more information, read the README.md of each module</i>)</li>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: 10 }}>
                    Visual extension code repository: {''}
                    <a
                      href="https://github.com/devluisclaudio/joseph-project.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#0070f3',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'color 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#0056b3'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#0070f3'}
                    >
                      joseph-project
                    </a>
                  </li>
                </ul>

              </ul>
            </div>
          </div>

          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <h2>🔧 Requirements</h2>
            <div style={{ margin: 10, fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#333', lineHeight: 1.5 }}>
              <p style={{ margin: 0 }}>
                Node.js - {' '}
                <a
                  href="https://nodejs.org/en/download/package-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0070f3',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#0056b3'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#0070f3'}
                >
                  Download
                </a>
              </p>
            </div>
          </div>

          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <h2>🛠️ Installation</h2>
            <div style={{ margin: 25 }}>
              <ol>
                <div style={{ margin: 10 }}>
                  <li><strong>Clone the repository:</strong></li>
                  <pre><code>git clone git@github.com:mactavishkkk/joseph.git</code></pre>
                </div>
                <div style={{ margin: 10 }}>
                  <li><strong>Access the root folder:</strong></li>
                  <pre><code>cd joseph</code></pre>
                </div>
                <div style={{ margin: 10 }}>
                  <li><strong>Install the dependencies:</strong></li>
                  <pre><code>npm install</code></pre>
                </div>
                <div style={{ margin: 10 }}>
                  <li><strong>Use the <code>.env.example</code> file to create the <code>.env</code> file.</strong></li>
                  <li><strong>Create a production environment:</strong></li>
                </div>
                <div style={{ margin: 10 }}>
                  <pre><code>npm run start</code></pre>
                  <li><strong>Or a development environment:</strong></li>
                </div>
                <div style={{ margin: 10 }}>
                  <pre><code>npm run dev</code></pre>
                  <li><strong>Access the welcome route at:</strong> <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">http://localhost:3000/</a></li>
                </div>
              </ol>
            </div>
          </div>

          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <h2>🌱 More About</h2>
            <p>Inspired by the story of Joseph of Egypt, who interpreted dreams, the Joseph Project aims to anticipate environmental crises in the Amazon.</p>
            <p>By analyzing vast sets of historical data, NASA satellite data, and other diverse data in real-time, our model predicts climate and hydrological events, providing valuable insights. This helps decision-makers and local communities prepare for and mitigate impacts.</p>
            <h3>👤 Vitor Hugo Schunemann</h3>
            <p>
              <strong>Project Coordinating Biologist</strong> |
              <a
                href="https://www.linkedin.com/in/vitor-hugo-schunemann-vargas-20482b229/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#0070f3',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#0056b3'}
                onMouseOut={(e) => e.currentTarget.style.color = '#0070f3'}
              >
                {''} LinkedIn
              </a>
            </p>
            <p>Vitor Hugo Schunemann is a biologist graduated from the Federal University of Santa Maria (UFSM) with a master's degree in tropical ecology from the National Institute of Amazonian Research (INPA).</p>
            <p>He works in theoretical and applied ecology, particularly developing computational models applied to biology. Predictive theoretical models about future ecosystem conditions are among his greatest motivations in environmental sciences. Combining these models with artificial intelligence to serve the public good is a unique opportunity.</p>
          </div>

          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <h4>📚 References</h4>
            <p>
              References for this project and others can be found here:
              <a
                href="https://drive.google.com/drive/folders/1Z01WqFLOcyfh9SfDYfQhnAHoVkHAASvf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#0070f3',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#0056b3'}
                onMouseOut={(e) => e.currentTarget.style.color = '#0070f3'}
              >
                {''} Google Drive
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
