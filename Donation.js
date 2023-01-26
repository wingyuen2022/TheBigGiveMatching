enum Result {
	Success,
	Fail
}

enum FundStatus {
	Available,
	Reserved,
	Finalise,
	Expired
}

enum DonationStatus {
	Available,
	Reserved,
	Collected,
	Expired
}

class Fund {
	fundId: string; // Unique Fund ID
	donationId: string = ""; // Unique Donation ID
	totalAmount: number = 0; // Total amount in £
	matchOrder: number = 1; // Default order is 1 (Lowest)
	matchRatio: number = 1; // Default ratio is 1:1
	status: FundStatus = FundStatus.Available; // Default status is Available
	
	constructor(fundId: string, amount: number, matchOrder: number, matchRatio: number) {
		this.fundId = fundId;
		this.totalAmount = amount;
		this.matchOrder = matchOrder;
		this.matchRatio = matchRatio;
	}
	
	getFundId(): string {
		return this.fundId;
	}

	getDonationId(): string {
		return this.donationId;
	}
	
	getTotalAmount(): number {
		return this.totalAmount;
	}
	
	getMatchingOrder(): number {
		return this.matchOrder;
	}
	
	getMatchRatio(): number {
		return this.matchRatio;
	}
	
	getStatus(): FundStatus {
		return this.status;
	}
	
	// Reserve fund method
	reserveFund(donationId: string): Result {
		if(this.status === FundStatus.Available) {
			this.status = FundStatus.Reserved;
      		this.donationId = donationId;
			return Result.Success;
		}
		return Result.Fail;
	}
	
	// Finalise fund method
	finaliseFund(): Result {
		if(this.status === FundStatus.Reserved) {
			this.status = FundStatus.Finalise;
			return Result.Success;
		}
		return Result.Fail;
	}
	
	// Expire matching method
	expireMatching(): Result {
		if(this.status === FundStatus.Reserved) {
			this.status = FundStatus.Expired;
			this.donationId = "";
			return Result.Success;
		}
		return Result.Fail;
	}
}

class Donation {
	donationId: string; // Unique Donation ID
	amountRequired: number = 0; // Amount in £
	amountAllocated: number = 0; // Amount allocated in £
	status: DonationStatus = DonationStatus.Available; // Default status is Available
 
	constructor(donationId: string, amount: number) {
		this.donationId = donationId;
		this.amountRequired = amount;
	}
	
	getDonationId(): string {
		return this.donationId;
	}
	
	getAmountRequired(): number {
		return this.amountRequired;
	}
	
	getAmountAllocated(): number {
		return this.amountAllocated;
	}
	
	getStatus(): DonationStatus {
		return this.status;
	}
	
	// Reserve donation method
	reserveDonation(amount: number): Result {
		if(this.status !== DonationStatus.Collected) {
			this.status = DonationStatus.Reserved;
			this.amountRequired = this.amountRequired - amount;
			this.amountAllocated = this.amountAllocated + amount;
			return Result.Success;
		}
		return Result.Fail;
	}
	
	// Collect donation method
	collectDonation(): Result {
		if(this.status === DonationStatus.Reserved) {
			this.status = DonationStatus.Collected;
			return Result.Success;
		}
		return Result.Fail;
	}
	
	// Expire matching method
	expireMatching(): Result {
		if(this.status === DonationStatus.Reserved) {
			this.status = DonationStatus.Expired;
			return Result.Success;
		}
		return Result.Fail;
	}

}


let listOfFunds = new Array<Fund>;
let listOfDonations = new Array<Donation>;

// Initialisation method
function initialiseSimulation() {
	listOfFunds = new Array<Fund>;
	listOfDonations = new Array<Donation>;

	listOfFunds.push(new Fund("Fund1", 200, 1, 1));
	listOfFunds.push(new Fund("Fund2", 200, 1, 2));
	listOfFunds.push(new Fund("Fund3", 500, 1, 1));
	listOfFunds.push(new Fund("Fund4", 500, 1, 2));
	listOfFunds.push(new Fund("Fund5", 1000, 2, 1));
	listOfFunds.push(new Fund("Fund6", 500, 2, 2));
	listOfDonations.push(new Donation("Donation1", 2000));
	listOfDonations.push(new Donation("Donation2", 2100));
	
	// Sort the matching order, (1) has the lowest priority
	listOfFunds.sort((a, b)=>a.getMatchingOrder()>b.getMatchingOrder()?-1:a.getMatchingOrder()<b.getMatchingOrder()?1:0);
}

// Finalise donation
function finaliseFund(donationId: string) {
	let result: Result = Result.Fail;
	let listOfFundByDonationId = listOfFunds.filter(curFund=>curFund.getDonationId()===donationId);
	listOfFundByDonationId.map((curFund)=>{
		if (collectDonation(donationId) === Result.Success) {
			result = curFund.finaliseFund();
		}
	});
	return result;
}

function collectDonation(donationId: string): Result {
	let result: Result = Result.Fail;
	let targetDonation = listOfDonations.filter(curDonation=>curDonation.getDonationId()===donationId);
	if (targetDonation && targetDonation.length === 1) {
		targetDonation[0].collectDonation();
		result = Result.Success;
	}
	return result;
}

// Expire donation
function expireFund(donationId: string) {
	let result: Result = Result.Fail;
	let listOfFundByDonationId = listOfFunds.filter(curFund=>curFund.getDonationId()===donationId);
	listOfFundByDonationId.map((curFund)=>{
		if (expireDonation(donationId) === Result.Success) {
			result = curFund.expireMatching();
		}
	});
	return result;
}

function expireDonation(donationId: string): Result {
	let result: Result = Result.Fail;
	let targetDonation = listOfDonations.filter(curDonation=>curDonation.getDonationId()===donationId);
	if (targetDonation && targetDonation.length === 1) {
		targetDonation[0].expireMatching();
		result = Result.Success;
	}
	return result;
}

// Display method
function display() {
	listOfFunds.map((cur)=>{
		console.log("Fund: " + cur.getFundId() + " (" + cur.getMatchingOrder() + ") allocated to: " + cur.getDonationId() + " Amount: £" + cur.getTotalAmount() + "*" + cur.getMatchRatio() + "=£" + (cur.getTotalAmount()*cur.getMatchRatio()) + " [" + FundStatus[cur.getStatus()] + "]");
	});
  listOfDonations.map((cur)=>{
		console.log("Donation: " + cur.getDonationId() + " Required: £" + cur.getAmountRequired() + " Allocated: £" + cur.getAmountAllocated() + " [" + DonationStatus[cur.getStatus()] + "]");
	});
}

// Run matching method
function runMatching() {
	listOfDonations.map((curDonation)=>{
		listOfFunds.map((curFund)=>{
			if (curFund.getStatus() === FundStatus.Available) {
				if(curDonation.getAmountRequired() > 0) {
					let amount = curFund.getTotalAmount()*curFund.getMatchRatio();
					if (curDonation.getAmountRequired() >= amount) {
						curDonation.reserveDonation(amount);
            			curFund.reserveFund(curDonation.getDonationId());
					}
				}
			}
		});
	});
}

// Normal matching allocaton, donnection collected
function case1() {
	initialiseSimulation();
	//display();
	runMatching();
	let finaliseResult1 = finaliseFund(listOfDonations[0].getDonationId()); // Finalise Donation 1
	let finaliseResult2 = finaliseFund(listOfDonations[1].getDonationId()); // Finalise Donation 2
	display();
	console.log("Finalise Donation 1: " + Result[finaliseResult1]);
	console.log("Finalise Donation 2: " + Result[finaliseResult2]);
	console.log("---   ---   ---   ---   ---");
}

// Donation 1 being collected but donation 2 has expired
function case2() {
	initialiseSimulation();
	//display();
	runMatching();
	let finaliseResult = finaliseFund(listOfDonations[0].getDonationId()); // Finalise Donation 1
	let expireResult = expireFund(listOfDonations[1].getDonationId()); // Expire Donation 2
	display();
	console.log("Finalise Donation 1: " + Result[finaliseResult]);
	console.log("Expire Donation 2: " + Result[expireResult]);
	console.log("---   ---   ---   ---   ---");
}

// Main
case1();
case2();