import Image from "next/image";
import React from "react";
import sales from "../assets/icons/dashboard/sales.svg";
import arrowDown from "../assets/icons/elements/arrowDown.svg";
import customers from "../assets/icons/dashboard/customers.svg";
import orders from "../assets/icons/dashboard/orders.svg";

const MainContainer = () => {
  return (
    <section className="dashboard-container">
      <section>
        <header>
          <Image src={sales} alt="sales icon" />

          <span>
            This week <Image src={arrowDown} alt="select icon" />
          </span>
        </header>

        <div className="dashboard-item-content">
          <div>
            <h3>Sales</h3>
            <p>
              $0.00 <span>+0.00%</span>
            </p>
          </div>
          <div>
            <h3>Volume</h3>
            <p>0</p>
          </div>
        </div>
      </section>

      <section>
        <header>
          <Image src={customers} alt="sales icon" />

          <span>
            This week <Image src={arrowDown} alt="select icon" />
          </span>
        </header>

        <div className="dashboard-item-content">
          <div>
            <h3>Customers</h3>
            <p>
              0 <span>+0.00%</span>
            </p>
          </div>
          <div>
            <h3>Active</h3>
            <p>
              0 <span>+0.00%</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <header>
          <Image src={orders} alt="sales icon" />

          <span>
            This week <Image src={arrowDown} alt="select icon" />
          </span>
        </header>

        <div className="dashboard-item-content">
          <div>
            <h3>All Orders</h3>
            <p>0</p>
          </div>
          <div>
            <h3>Pending</h3>
            <p>0</p>
          </div>
          <div>
            <h3>Completed</h3>
            <p>
              0 <span>+0.00%</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <header>
          <h2>Marketting</h2>

          <span>
            This week <Image src={arrowDown} alt="select icon" />
          </span>
        </header>

        <div className="dashboard-item-content">
          <div>
            <h3>All Orders</h3>
            <p>0</p>
          </div>
          <div>
            <h3>Pending</h3>
            <p>0</p>
          </div>
          <div>
            <h3>Completed</h3>
            <p>
              0 <span>+0.00%</span>
            </p>
          </div>
        </div>
      </section>
      
      <section>all products / abandoned carts</section>
      <section>recent orders</section>
      <section>summary</section>
    </section>
  );
};

export default MainContainer;
