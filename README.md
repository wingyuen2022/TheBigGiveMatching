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
* 5 Internal funtions (InitialiseSimulation(), RunMatching(), Display(), CollectDonation(), ExpireDonation())
* 2 Helper functions (1 for FinaliseFund(), 1 for ExpireFund())
* 2 Program handler functions (Case1(), Case2())

Case
---------

* Case 1 - Both donation have been collected, all funds are finalised.
* Case 2 - One donation has been collected, another donation has been expired. Fund status updated accordingly.

Simulation initialisation
---------

* {LOG]
* "Fund: Fund5 (2) allocated to:  Amount: £1000*1=£1000 [Available]" 
* "Fund: Fund6 (2) allocated to:  Amount: £500*2=£1000 [Available]" 
* "Fund: Fund1 (1) allocated to:  Amount: £200*1=£200 [Available]" 
* "Fund: Fund2 (1) allocated to:  Amount: £200*2=£400 [Available]" 
* "Fund: Fund3 (1) allocated to:  Amount: £500*1=£500 [Available]" 
* "Fund: Fund4 (1) allocated to:  Amount: £500*2=£1000 [Available]" 
* "Donation: Donation1 Required: £2000 Allocated: £0 [Available]" 
* "Donation: Donation2 Required: £2100 Allocated: £0 [Available]" 


Run matching
---------

* Matching order 1 has lowest priority.
* If amount required is greater or equal to amount in fund (Required >= avaliable), the fund will be reserved.
* Updated Donation ID in Fund.
* Once fund status marked as Reserved, will become unavaliable to the rest of the donation.

When finalised
---------

* Update Fund status to Finalise.
* Update Donation status to Collected.

When expired
---------

* Update Fund status to Expired.
* Update Donation ID in Fund to an empty string.
* Update Donation status to Expired.

Usage
---------

* Copy the whole page from Donation.js to any online simulator(For example https://www.typescriptlang.org/play), then click on Run button
* Result will show on Logs section on the right hand side or bottom half.

Expected output
---------

* {LOG]
* "Fund: Fund5 (2) allocated to: Donation1 Amount: £1000*1=£1000 [Finalise]" 
* "Fund: Fund6 (2) allocated to: Donation1 Amount: £500*2=£1000 [Finalise]" 
* "Fund: Fund1 (1) allocated to: Donation2 Amount: £200*1=£200 [Finalise]" 
* "Fund: Fund2 (1) allocated to: Donation2 Amount: £200*2=£400 [Finalise]" 
* "Fund: Fund3 (1) allocated to: Donation2 Amount: £500*1=£500 [Finalise]" 
* "Fund: Fund4 (1) allocated to: Donation2 Amount: £500*2=£1000 [Finalise]" 
* "Donation: Donation1 Required: £0 Allocated: £2000 [Collected]" 
* "Donation: Donation2 Required: £0 Allocated: £2100 [Collected]" 
* "Finalise Donation 1: Success" 
* "Finalise Donation 2: Success" 
* "---   ---   ---   ---   ---" 
* "Fund: Fund5 (2) allocated to: Donation1 Amount: £1000*1=£1000 [Finalise]" 
* "Fund: Fund6 (2) allocated to: Donation1 Amount: £500*2=£1000 [Finalise]" 
* "Fund: Fund1 (1) allocated to:  Amount: £200*1=£200 [Expired]" 
* "Fund: Fund2 (1) allocated to:  Amount: £200*2=£400 [Expired]" 
* "Fund: Fund3 (1) allocated to:  Amount: £500*1=£500 [Expired]" 
* "Fund: Fund4 (1) allocated to:  Amount: £500*2=£1000 [Expired]" 
* "Donation: Donation1 Required: £0 Allocated: £2000 [Collected]" 
* "Donation: Donation2 Required: £0 Allocated: £2100 [Expired]" 
* "Finalise Donation 1: Success" 
* "Expire Donation 2: Success" 
* "---   ---   ---   ---   ---" 
