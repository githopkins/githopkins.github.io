$(document).ready(function() {
	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_birth_date').removeClass('datepicker');
	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_birth_date").prop("placeholder", "MM/DD/YYYY format");
	$('#sudoux_mortgagebundle_loanapplicationtype_co_borrower_0_birth_date').removeClass('datepicker');
	$("#sudoux_mortgagebundle_loanapplicationtype_co_borrower_0_birth_date").prop("placeholder", "MM/DD/YYYY format");
	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_start_date').removeClass('datepicker');
	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_start_date").prop("placeholder", "MM/DD/YYYY format");
	$('#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_end_date').removeClass('datepicker');
	$("#sudoux_mortgagebundle_loanapplicationtype_borrower_employment_0_end_date").prop("placeholder", "MM/DD/YYYY format");
	$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_0_institution_name").prop("placeholder", "Institution Name");
	$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_0_account_number").prop("placeholder", "Account Number");
	$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_0_balance").prop("placeholder", "Account Balance");
	$("#add-asset-account").click(function(){
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_1_institution_name").prop("placeholder", "Institution Name");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_1_account_number").prop("placeholder", "Account Number");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_1_balance").prop("placeholder", "Account Balance");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_2_institution_name").prop("placeholder", "Institution Name");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_2_account_number").prop("placeholder", "Account Number");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_2_balance").prop("placeholder", "Account Balance");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_3_institution_name").prop("placeholder", "Institution Name");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_3_account_number").prop("placeholder", "Account Number");
		$("#sudoux_mortgagebundle_loanapplicationtype_asset_account_3_balance").prop("placeholder", "Account Balance");
		$("#add-asset-account").hide();
	});
	$("#add-income-monthly").click(function(){
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_base").prop("placeholder", "Base");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_overtime").prop("placeholder", "Overtime");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_bonus").prop("placeholder", "Bonus");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_commission").prop("placeholder", "Commission");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_interest").prop("placeholder", "Interest");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_rent_net").prop("placeholder", "Net Rent");
		$("#sudoux_mortgagebundle_loanapplicationtype_income_monthly_1_other").prop("placeholder", "Other");
		$("#add-income-monthly").hide();
	});
});