The Big Give Matching Exercise
---------

* Demonstrate how to match funding to donation.
* It supports matching order and matching ratio.

Files
---------

* Donation.js
* README.md

Structure
---------

* 3 Enum (Result, FundStatus, DonationStatus)
* 2 Class (Fund, Donation)

For simulation
---------

* 2 Array (1 for list of funds, 1 for list of donations)
* 5 Internal funtions (InitialiseSimulation(), RunMatching(), Display(), FinaliseFund(), ExpireFund())
* 2 Helper functions (1 for FinaliseFund(), 1 for ExpireFund())
* 2 Program handler functions (Case1(), Case2())

Case
---------

* Case 1 - Both donation have been collected, all funds are finalised.
* Case 2 - One donation has been collected, another donation has been expired. Fund status updated accordingly.


Run matching
---------

* Matching order 1 has lowest priority.
* If amount required is greater or equal to amount in fund (Required >= avaliable), the fund will be reserved.
* Updated Donation ID in Fund.
* Once fund status marked as reserved, will become unavaliable to the rest of donation.

When finalised
---------

* Update Fund status to Finalise.
* Update Donation status to Collected.

When expired
---------

* Update Fund status to Expired.
* Update Donation ID in Fund to empty.
* Update Donation status to Expired.

Usage
---------

* Copy the whole page from Donation.js to any online simulator(For example https://www.typescriptlang.org/play), then click on Run button
* Result will show on Logs section on the right hand side or bottom half.
