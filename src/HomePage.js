// src/HomePage.js

import React from "react";
import { Link } from "react-router-dom";

import savingsImage from "./assets/savings-calculator.png";
import compoundImage from "./assets/compound-calculator.png";
import budgetImage from "./assets/budget-calculator.png";

// Placeholder content, modify as needed
const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="home-page-header-section">
          <div>
            <h1>Personal Finance Calculator</h1>
          </div>
          <div className="created-by-section">
            <div>Created By</div>
            <div className="appre-logo">
              <img src="/appre-logo.png" alt="Appre Logo" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/savings-calculator" className="nav-link">
                <img src={savingsImage} alt="Savings" />
                <span>Savings Calculator</span>
              </Link>
            </li>
            <li>
              <Link to="/compound-calculator" className="nav-link">
                <img src={compoundImage} alt="Compound" />
                <span>Compound Calculator</span>
              </Link>
            </li>
            <li>
              <Link to="/budget-calculator" className="nav-link">
                <img src={budgetImage} alt="Budget" />
                <span>Budget Calculator</span>
              </Link>
            </li>
          </ul>
        </nav>
        <section>
          {/* Add more content here as needed */}
          <p>This is the home page content.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default HomePage;
