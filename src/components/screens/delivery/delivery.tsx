import { FC } from "react";
import classes from "./delivery.module.scss";

const Delivery: FC = () => {
  return (
    <div className={classes.delivery}>
      <ul className={classes.list}>
        <li>
          <h4>Delivery to Omniva package machines</h4>
          <div>
            <p>
              As soon as your package is delivered to an Omniva package machine,
              you will receive an announcement via the mobile phone number that
              you indicated. You can receive the package within seven days time
              after the announcement. Click on the button{" "}
              <b>Receive your package</b> on the terminal screen, and then enter
              the code that you receive via your mobile phone or E-mail address.
            </p>
          </div>
        </li>

        <li>
          <h4> Delivery by a courier</h4>
          <div>
            <p>
              Omniva has a courier service which delivers things all over
              Latvia. Choose this option if you want the courier to deliver the
              package to your home. Packages will be delivered one or two days
              after you have received the announcement that they have been given
              to the courier. Couriers have pre-planned routes, which means that
              it is not possible to choose a specific time for the delivery. You
              will receive a reminder via your telephone to say that the courier
              is on his way. The courier will contact you no later than 30
              minutes before the planned delivery. Deliveries in Rīga and its
              metropolitan area are made between 9:00 AM and 8:00 PM. Deliveries
              to other cities are made between 9:00 AM and 6:00 PM. If your
              order includes alcoholic and/or energy drinks, the recipient must
              present a personal ID document to the courier. If it is not
              possible to identify the recipients and the recipient is younger
              than 18, the alcoholic and/or energy drinks will not be delivered,
              and the order will be annulled.
            </p>
            <p>
              If the weight of the delivery is up to 30 kg, the courier will
              unload it and deliver it to the first secure place (behind the
              doors of the flat, house or garage, but not rooms or the yard). In
              this case, you do not have to order additional unloading services.
              Attention! If your packages are large or if the package is on a
              palette, the package will not be carried irrespective of its
              weight
            </p>
            <p>
              If at least one package weighs more than 30 kg (e.g., large
              household equipment, furniture, etc.), the courier will only help
              to unload the package from the vehicle, but he will not help to
              carry it to the desired place.
            </p>
          </div>
        </li>
        <li>
          <h4>
            Delivery by a courier who brings the package into the apartment
          </h4>
          <div>
            <p>
              If your package weighs more than 30 kg, we recommend that you
              order this service when you make the purchase. The fee is EUR 30.
              The delivery involves a cargo vehicle, and two couriers will
              deliver it to the indicated address. You must make sure that the
              vehicle can access the place where it will be unloaded, because
              otherwise the delivery may be impossible. Deliveries are made in
              Rīga and its metropolitan area from 9:00 AM and 7:00 PM on
              business days and Saturdays. When choosing this service, state a
              three-hour window during which you would like to receive the
              delivery
            </p>
          </div>
        </li>
        <li>
          <h4>International deliveries</h4>
          <div>
            <p>
              Deliveries to Lithuania and Estonia are made by the Omniva courier
              service. Deliveries can be made to package machines or the address
              that the client has indicated. The fee for delivering the package
              to a package machine is EUR 2.99. The fee will depend on the size
              of the package, and it will be calculated when the order is made.
            </p>
            <p>
              Deliveries to European Union member states and elsewhere are made
              by the EMS courier services. The fee will depend on the size of
              the package, and it will be calculated when the order is made.
            </p>
          </div>
        </li>
      </ul>
      <div className={classes.questions}>
        {" "}
        Should you have any questions, contact our operators on: +371 11111111,
        иor write to:test@test.co.uk. We guarantee an individualised approach to
        each client.
      </div>
    </div>
  );
};

export default Delivery;
