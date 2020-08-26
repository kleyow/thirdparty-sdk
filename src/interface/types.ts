/*****
 License
 --------------
 Copyright © 2020 Mojaloop Foundation The Mojaloop files are made available by the Mojaloop Foundation
 under the Apache License, Version 2.0 (the 'License') and you may not
 use these files except in compliance with the License. You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in
 writing, the Mojaloop files are distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS
 OF ANY KIND, either express or implied. See the License for the specific language governing
 permissions and limitations under the License. Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file. Names of the original
 copyright holders (individuals or organizations) should be listed with a '*' in the first column.
 People who have contributed from an organization can be listed under the organization that actually
 holds the copyright for their contributions (see the Gates Foundation organization for an example).
 Those individuals should have their names indented and be marked with a '-'. Email address can be
 added optionally within square brackets <email>.
 * Gates Foundation
 - Name Surname <name.surname@gatesfoundation.com>

 - Kevin Leyow <kevin.leyow@modusbox.com>
 --------------
 ******/
'use strict'

/**
 * This is used for personal information
 */
export interface PersonalInfo {
  complexName?: {
    firstName?: string;
    middleName?: string;
    lastName?: string;
  };
  dateOfBirth?: string;
}
export interface PartyIdInfo {
  partyIdType: string;
  partyIdentifier: string;
  partySubIdOrType?: string;
  fspId?: string;
}
export enum AmountType {
  SEND = 'SEND',
  RECEIVE = 'RECEIVE',
}
/**
* common interface used for payee and payer
*/
export interface Party {
  partyIdInfo: PartyIdInfo;
  merchantClassificationCode?: string;
  name?: string;
  personalInfo?: PersonalInfo;
}
/**
* This is used for amount feilds
*/
export interface Money {
  currency: string;
  amount: string;
}
/**
* This interface used for transaction information
*/
export interface TransactionType {
  scenario: string;
  subScenario?: string;
  initiator: string;
  initiatorType: string;
  refundInfo?: {
    originalTransactionId: string;
    refundReason?: string;
  };
  balanceOfPayments?: string;
}
/**
* This interface used for transaction requests
*/
export interface ThirdpartyTransactionRequest {
  transactionRequestId: string;
  sourceAccountId: string;
  consentId: string;
  payee: Party;
  payer: Party;
  amountType: AmountType;
  amount: Money;
  transactionType: TransactionType;
  expiration: string;
}
/**
* This interface used for common errors
*/
export interface ErrorInformation {
  errorCode?: string;
  errorDescription?: string;
  extensionList?: {
    extension: [{
      key: string;
      value: string;
    }];
  };
}

/**
* This interface used for transaction requests
*/
export interface QuoteRequest {
  quoteId: string;
  transactionId: string;
  transactionRequestId: string;
  payee: Party;
  payer: Party;
  amountType: AmountType;
  amount: Money;
  transactionType: TransactionType;
  note: string;
}
