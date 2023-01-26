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

[LOG]: "Fund: Fund5 (2) allocated to:  Amount: £1000*1=£1000 [Available]" 
[LOG]: "Fund: Fund6 (2) allocated to:  Amount: £500*2=£1000 [Available]" 
[LOG]: "Fund: Fund1 (1) allocated to:  Amount: £200*1=£200 [Available]" 
[LOG]: "Fund: Fund2 (1) allocated to:  Amount: £200*2=£400 [Available]" 
[LOG]: "Fund: Fund3 (1) allocated to:  Amount: £500*1=£500 [Available]" 
[LOG]: "Fund: Fund4 (1) allocated to:  Amount: £500*2=£1000 [Available]" 
[LOG]: "Donation: Donation1 Required: £2000 Allocated: £0 [Available]" 
[LOG]: "Donation: Donation2 Required: £2100 Allocated: £0 [Available]" 


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

[LOG]: "Fund: Fund5 (2) allocated to: Donation1 Amount: £1000*1=£1000 [Finalise]" 
[LOG]: "Fund: Fund6 (2) allocated to: Donation1 Amount: £500*2=£1000 [Finalise]" 
[LOG]: "Fund: Fund1 (1) allocated to: Donation2 Amount: £200*1=£200 [Finalise]" 
[LOG]: "Fund: Fund2 (1) allocated to: Donation2 Amount: £200*2=£400 [Finalise]" 
[LOG]: "Fund: Fund3 (1) allocated to: Donation2 Amount: £500*1=£500 [Finalise]" 
[LOG]: "Fund: Fund4 (1) allocated to: Donation2 Amount: £500*2=£1000 [Finalise]" 
[LOG]: "Donation: Donation1 Required: £0 Allocated: £2000 [Collected]" 
[LOG]: "Donation: Donation2 Required: £0 Allocated: £2100 [Collected]" 
[LOG]: "Finalise Donation 1: Success" 
[LOG]: "Finalise Donation 2: Success" 
[LOG]: "---   ---   ---   ---   ---" 
[LOG]: "Fund: Fund5 (2) allocated to: Donation1 Amount: £1000*1=£1000 [Finalise]" 
[LOG]: "Fund: Fund6 (2) allocated to: Donation1 Amount: £500*2=£1000 [Finalise]" 
[LOG]: "Fund: Fund1 (1) allocated to:  Amount: £200*1=£200 [Expired]" 
[LOG]: "Fund: Fund2 (1) allocated to:  Amount: £200*2=£400 [Expired]" 
[LOG]: "Fund: Fund3 (1) allocated to:  Amount: £500*1=£500 [Expired]" 
[LOG]: "Fund: Fund4 (1) allocated to:  Amount: £500*2=£1000 [Expired]" 
[LOG]: "Donation: Donation1 Required: £0 Allocated: £2000 [Collected]" 
[LOG]: "Donation: Donation2 Required: £0 Allocated: £2100 [Expired]" 
[LOG]: "Finalise Donation 1: Success" 
[LOG]: "Expire Donation 2: Success" 
[LOG]: "---   ---   ---   ---   ---" 
