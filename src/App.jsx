import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account.jsx";
import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import ContactUs from "./components/ContactUs.jsx";
// import Slider from "./components/Slider.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SavingsPlan from "./components/SavingsPlan.jsx";
import AvailablePlan from "./components/AvailablePlans.jsx";
import ActivePlansDetails from "./components/ActivePlansDetails.jsx";
import AccountType from "./components/AccountType.jsx";
import AccountCreation from "./components/AccountCreation.jsx";
import JoinSavingsPlan from "./components/JoinSavingsPlan.jsx";
import IncentivesRewards from "./components/IncentivesRewards.jsx";
import RewardDetails from "./components/RewardDetails.jsx";
import RedemptionConfirm from "./components/RedemptionConfirmed.jsx";
import FoodHamperGift from "./components/FoodHamperGift.jsx";
import Wallet from "./components/Wallet.jsx";
import TransactionDetails from "./components/TransactionDetails.jsx";
import AddBankAccount from "./components/AddBankAccount.jsx";
import WalletSettings from "./components/WalletSettings.jsx";
import TransactionModal from "./components/TransactionModal.jsx";
import WithdrawMoney from "./components/WithdrawModal.jsx";
import WithdrawModal from "./components/WithdrawModalII.jsx";
import TransactionModalI from "./components/WithdrawModelIII.jsx";
import ConfirmWithdrawal from "./components/ConfirmWithdrawal.jsx";
import WithdrawalSuccess from "./components/WithdrawalSuccess.jsx";
import FoodstuffMarket from "./components/FoodstuffMarketplace.jsx";
import ProductDetails from "./components/ProduceDetails.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import DeliveryDetails from "./components/DeliveryDetails.jsx";
import OrderSuccessModal from "./components/OrderSuccessful.jsx";
import OrderHistory from "./components/OrderHistory.jsx";
import TrackOrder from "./components/TrackOrder.jsx";
import ReferralManagement from "./components/ReferralManagement.jsx";
import SupportCenter from "./components/SupportCenter.jsx";
import ChatAssistant from "./components/ChatAssistant.jsx";
import SubmitTicket from "./components/SubmitTicket.jsx";
import SupportTickets from "./components/SupportTicket.jsx";
import SupportChat from "./components/SupportChat.jsx";
import Settings from "./components/Settings.jsx";
import AccountVerification from "./components/AccountVerification.jsx";
import UploadIDModal from "./components/UpdateIdModal.jsx";
import SelfieVerificationModal from "./components/SelfieVerificationModal.jsx";
import VerificationComplete from "./components/VerificationComplete.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import NotificationSettings from "./components/NotificationSettings.jsx";
import Profile from "./components/Profile.jsx";
import EditProfile from "./components/EditProfile.jsx";
import Notifications from "./components/Notification.jsx";
import GenerateReferralCode from "./components/GenerateReferralCode.jsx";
import ReferralCode from "./components/ReferralCode.jsx";
import Admin from "./Admin.jsx";

function App() {
  return (
    <div className="lg:w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<Account />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/slider" element={<Slider />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/savings-plan" element={<SavingsPlan />} />
        <Route path="/available-plans" element={<AvailablePlan />} />
        <Route path="/active-plan" element={<ActivePlansDetails />} />
        <Route path="/AccountType" element={<AccountType />} />
        <Route path="/AccountCreation" element={<AccountCreation />} />
        <Route path="/joinsavingsplan" element={<JoinSavingsPlan />} />
        <Route path="/Incentives-Rewards" element={<IncentivesRewards />} />
        <Route path="/RewardDetails" element={<RewardDetails />} />
        <Route path="/RedemptionConfirmed" element={<RedemptionConfirm />} />
        <Route path="/FoodHamperGift" element={<FoodHamperGift />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/TransactionDetails" element={<TransactionDetails />} />
        <Route path="/AddBankAccount" element={<AddBankAccount />} />
        <Route path="/wallet/settings" element={<WalletSettings />} />
        <Route path="/top-up-wallet" element={<TransactionModal />} />
        <Route path="/withdraw" element={<WithdrawMoney />} />
        <Route path="/withdraw/accountInfo" element={<WithdrawModal />} />
        <Route
          path="/withdraw/create-account"
          element={<TransactionModalI />}
        />
        <Route path="/confirmwithdrawals" element={<ConfirmWithdrawal />} />
        <Route path="/withdrawalSuccess" element={<WithdrawalSuccess />} />
        <Route path="/foodstuff" element={<FoodstuffMarket />} />
        <Route path="/prouductdetails" element={<ProductDetails />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/deliverydetails" element={<DeliveryDetails />} />
        <Route path="/checkoutpage" element={<OrderSuccessModal />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/referralmanagement" element={<ReferralManagement />} />
        <Route path="/support" element={<SupportCenter />} />
        <Route path="/chatassistant" element={<ChatAssistant />} />
        <Route path="/submitticket" element={<SubmitTicket />} />
        <Route path="/supportticket" element={<SupportTickets />} />
        <Route path="/supportchat" element={<SupportChat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/accountverification" element={<AccountVerification />} />
        <Route path="/updateidmodal" element={<UploadIDModal />} />
        <Route
          path="/selfieverification"
          element={<SelfieVerificationModal />}
        />
        <Route
          path="/verification-complete"
          element={<VerificationComplete />}
        />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/notification-settings"
          element={<NotificationSettings />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/editprofile" element={<EditProfile />} />
        <Route path="/profile/notification" element={<Notifications />} />
        <Route
          path="/generatereferralcode"
          element={<GenerateReferralCode />}
        />
        <Route path="/referralcode" element={<ReferralCode />} />

        {/** Admin Portal */}

        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
