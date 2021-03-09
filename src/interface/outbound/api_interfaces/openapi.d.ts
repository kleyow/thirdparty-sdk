/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/health": {
    get: operations["HealthGet"];
  };
  "/metrics": {
    get: operations["MetricsGet"];
  };
  "/authorizations": {
    post: operations["OutboundAuthorizationsPost"];
  };
  "/thirdpartyTransaction/partyLookup": {
    post: operations["ThirdpartyTransactionPartyLookup"];
  };
  "/thirdpartyTransaction/{ID}/initiate": {
    post: operations["InitiateThirdpartyTransaction"];
  };
  "/thirdpartyTransaction/{ID}/approve": {
    post: operations["ApproveThirdpartyTransaction"];
  };
  "/thirdpartyRequests/transactions/{ID}/authorizations": {
    post: operations["VerifyThirdPartyAuthorization"];
  };
  "/consentRequests/{ID}/validate": {
    post: operations["ValidateConsentRequest"];
  };
}

export interface operations {
  /** The HTTP request GET /health is used to return the current status of the API. */
  HealthGet: {
    responses: {
      200: components["responses"]["200"];
      400: components["responses"]["400"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      405: components["responses"]["405"];
      406: components["responses"]["406"];
      501: components["responses"]["501"];
      503: components["responses"]["503"];
    };
  };
  /** The HTTP request GET /metrics is used to return metrics for the API. */
  MetricsGet: {
    responses: {
      200: components["responses"]["200"];
      400: components["responses"]["400"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      405: components["responses"]["405"];
      406: components["responses"]["406"];
      501: components["responses"]["501"];
      503: components["responses"]["503"];
    };
  };
  /** DFSP Requests Authorization of Transaction from the End User */
  OutboundAuthorizationsPost: {
    requestBody: {
      "application/json": components["schemas"]["AuthorizationsRequest"];
    };
    responses: {
      200: components["responses"]["AuthorizationsResponse"];
      400: components["responses"]["400"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      405: components["responses"]["405"];
      406: components["responses"]["406"];
      501: components["responses"]["501"];
      503: components["responses"]["503"];
    };
  };
  /** The HTTP request `POST /thirdpartyTransaction/partyLookup` is used to lookup information regarding the requested Party, defined by `Type`, `ID` and optionally `SubId`. */
  ThirdpartyTransactionPartyLookup: {
    requestBody: {
      "application/json": components["schemas"]["ThirdpartyTransactionPartyLookupRequest"];
    };
    responses: {
      200: components["responses"]["ThirdpartyTransactionPartyLookupResponse"];
      400: components["responses"]["400"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      405: components["responses"]["405"];
      406: components["responses"]["406"];
      501: components["responses"]["501"];
      503: components["responses"]["503"];
    };
  };
  /** The HTTP request `POST /thirdpartyTransaction/{ID}/initiate` is sent to the Switch to initiate a third party request transaction. */
  InitiateThirdpartyTransaction: {
    parameters: {
      path: {
        ID: components["parameters"]["ID"];
      };
    };
    requestBody: {
      "application/json": components["schemas"]["ThirdpartyRequestsTransactionsPostRequest"];
    };
    responses: {
      200: components["responses"]["ThirdpartyRequestsTransactionsPostResponse"];
      400: components["responses"]["400"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      405: components["responses"]["405"];
      406: components["responses"]["406"];
      501: components["responses"]["501"];
      503: components["responses"]["503"];
    };
  };
  /** The HTTP request `POST /thirdpartyTransaction/{ID}/approve` is used to approve a third party transaction . */
  ApproveThirdpartyTransaction: {
    parameters: {
      path: {
        ID: components["parameters"]["ID"];
      };
    };
    requestBody: {
      "application/json": components["schemas"]["ThirdpartyTransactionApproveRequest"];
    };
    responses: {
      200: components["responses"]["ThirdpartyTransactionApproveResponse"];
      400: components["responses"]["400"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      405: components["responses"]["405"];
      406: components["responses"]["406"];
      501: components["responses"]["501"];
      503: components["responses"]["503"];
    };
  };
  /** The HTTP request `POST /thirdpartyRequests/transactions/{ID}/authorizations` is used by the DFSP to verify a third party authorization. */
  VerifyThirdPartyAuthorization: {
    parameters: {
      path: {
        ID: components["parameters"]["ID"];
      };
    };
    requestBody: {
      "application/json": components["schemas"]["ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest"];
    };
    responses: {
      200: components["responses"]["ThirdpartyRequestsTransactionsIDAuthzResponse"];
      400: components["responses"]["400"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      405: components["responses"]["405"];
      406: components["responses"]["406"];
      501: components["responses"]["501"];
      503: components["responses"]["503"];
    };
  };
  /** The HTTP request `POST /consentRequests/{ID}/validate` is used to by a PISP to validate a OTP. */
  ValidateConsentRequest: {
    parameters: {
      path: {
        ID: components["parameters"]["ID"];
      };
    };
    requestBody: {
      "application/json": components["schemas"]["ConsentRequestValidateRequest"];
    };
    responses: {
      200: components["responses"]["200"];
      400: components["responses"]["400"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      405: components["responses"]["405"];
      406: components["responses"]["406"];
      501: components["responses"]["501"];
      503: components["responses"]["503"];
    };
  };
}

export interface components {
  parameters: {
    /** The identifier value. */
    ID: string;
  };
  schemas: {
    /** The API data type ErrorCode is a JSON String of four characters, consisting of digits only. Negative numbers are not allowed. A leading zero is not allowed. Each error code in the API is a four-digit number, for example, 1234, where the first number (1 in the example) represents the high-level error category, the second number (2 in the example) represents the low-level error category, and the last two numbers (34 in the example) represent the specific error. */
    ErrorCode: string;
    /** Error description string. */
    ErrorDescription: string;
    /** Extension key. */
    ExtensionKey: string;
    /** Extension value. */
    ExtensionValue: string;
    /** Data model for the complex type Extension. */
    Extension: {
      key: components["schemas"]["ExtensionKey"];
      value: components["schemas"]["ExtensionValue"];
    };
    /** Data model for the complex type ExtensionList. An optional list of extensions, specific to deployment. */
    ExtensionList: {
      /** Number of Extension elements. */
      extension: components["schemas"]["Extension"][];
    };
    /** Data model for the complex type ErrorInformation. */
    ErrorInformation: {
      errorCode: components["schemas"]["ErrorCode"];
      errorDescription: components["schemas"]["ErrorDescription"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /** Data model for the complex type object that contains an optional element ErrorInformation used along with 4xx and 5xx responses. */
    ErrorInformationResponse: {
      errorInformation?: components["schemas"]["ErrorInformation"];
    };
    /**
     * Below are the allowed values for the enumeration AuthorizationChannelType.
     * - OTP - One-time password generated by the Payer FSP.
     * - QRCODE - QR code used as One Time Password.
     * - U2F - U2F is a new addition isolated to Thirdparty stream.
     *
     * This is based on FSPIOP `AuthenticationType` with U2F added.
     */
    AuthorizationChannelType: "OTP" | "QRCODE" | "U2F";
    /** The API data type Integer is a JSON String consisting of digits only. Negative numbers and leading zeroes are not allowed. The data type is always limited to a specific number of digits. */
    Integer: string;
    /** The currency codes defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) as three-letter alphabetic codes are used as the standard naming representation for currencies. */
    Currency:
      | "AED"
      | "AFN"
      | "ALL"
      | "AMD"
      | "ANG"
      | "AOA"
      | "ARS"
      | "AUD"
      | "AWG"
      | "AZN"
      | "BAM"
      | "BBD"
      | "BDT"
      | "BGN"
      | "BHD"
      | "BIF"
      | "BMD"
      | "BND"
      | "BOB"
      | "BRL"
      | "BSD"
      | "BTN"
      | "BWP"
      | "BYN"
      | "BZD"
      | "CAD"
      | "CDF"
      | "CHF"
      | "CLP"
      | "CNY"
      | "COP"
      | "CRC"
      | "CUC"
      | "CUP"
      | "CVE"
      | "CZK"
      | "DJF"
      | "DKK"
      | "DOP"
      | "DZD"
      | "EGP"
      | "ERN"
      | "ETB"
      | "EUR"
      | "FJD"
      | "FKP"
      | "GBP"
      | "GEL"
      | "GGP"
      | "GHS"
      | "GIP"
      | "GMD"
      | "GNF"
      | "GTQ"
      | "GYD"
      | "HKD"
      | "HNL"
      | "HRK"
      | "HTG"
      | "HUF"
      | "IDR"
      | "ILS"
      | "IMP"
      | "INR"
      | "IQD"
      | "IRR"
      | "ISK"
      | "JEP"
      | "JMD"
      | "JOD"
      | "JPY"
      | "KES"
      | "KGS"
      | "KHR"
      | "KMF"
      | "KPW"
      | "KRW"
      | "KWD"
      | "KYD"
      | "KZT"
      | "LAK"
      | "LBP"
      | "LKR"
      | "LRD"
      | "LSL"
      | "LYD"
      | "MAD"
      | "MDL"
      | "MGA"
      | "MKD"
      | "MMK"
      | "MNT"
      | "MOP"
      | "MRO"
      | "MUR"
      | "MVR"
      | "MWK"
      | "MXN"
      | "MYR"
      | "MZN"
      | "NAD"
      | "NGN"
      | "NIO"
      | "NOK"
      | "NPR"
      | "NZD"
      | "OMR"
      | "PAB"
      | "PEN"
      | "PGK"
      | "PHP"
      | "PKR"
      | "PLN"
      | "PYG"
      | "QAR"
      | "RON"
      | "RSD"
      | "RUB"
      | "RWF"
      | "SAR"
      | "SBD"
      | "SCR"
      | "SDG"
      | "SEK"
      | "SGD"
      | "SHP"
      | "SLL"
      | "SOS"
      | "SPL"
      | "SRD"
      | "STD"
      | "SVC"
      | "SYP"
      | "SZL"
      | "THB"
      | "TJS"
      | "TMT"
      | "TND"
      | "TOP"
      | "TRY"
      | "TTD"
      | "TVD"
      | "TWD"
      | "TZS"
      | "UAH"
      | "UGX"
      | "USD"
      | "UYU"
      | "UZS"
      | "VEF"
      | "VND"
      | "VUV"
      | "WST"
      | "XAF"
      | "XCD"
      | "XDR"
      | "XOF"
      | "XPF"
      | "YER"
      | "ZAR"
      | "ZMW"
      | "ZWD";
    /** The API data type Amount is a JSON String in a canonical format that is restricted by a regular expression for interoperability reasons. This pattern does not allow any trailing zeroes at all, but allows an amount without a minor currency unit. It also only allows four digits in the minor currency unit; a negative value is not allowed. Using more than 18 digits in the major currency unit is not allowed. */
    Amount: string;
    /** Data model for the complex type Money. */
    Money: {
      currency: components["schemas"]["Currency"];
      amount: components["schemas"]["Amount"];
    };
    /** Identifier that correlates all messages of the same sequence. The API data type UUID (Universally Unique Identifier) is a JSON String in canonical format, conforming to [RFC 4122](https://tools.ietf.org/html/rfc4122), that is restricted by a regular expression for interoperability reasons. A UUID is always 36 characters long, 32 hexadecimal symbols and 4 dashes (‘-‘). */
    CorrelationId: string;
    /** The API data type DateTime is a JSON String in a lexical format that is restricted by a regular expression for interoperability reasons. The format is according to [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html), expressed in a combined date, time and time zone format. A more readable version of the format is yyyy-MM-ddTHH:mm:ss.SSS[-HH:MM]. Examples are "2016-05-24T08:38:08.699-04:00", "2016-05-24T08:38:08.699Z" (where Z indicates Zulu time zone, same as UTC). */
    DateTime: string;
    /** The API data type Latitude is a JSON String in a lexical format that is restricted by a regular expression for interoperability reasons. */
    Latitude: string;
    /** The API data type Longitude is a JSON String in a lexical format that is restricted by a regular expression for interoperability reasons. */
    Longitude: string;
    /** Data model for the complex type GeoCode. Indicates the geographic location from where the transaction was initiated. */
    GeoCode: {
      latitude: components["schemas"]["Latitude"];
      longitude: components["schemas"]["Longitude"];
    };
    /** Information for recipient (transport layer information). */
    IlpPacket: string;
    /** Condition that must be attached to the transfer by the Payer. */
    IlpCondition: string;
    /** The object sent in the PUT /quotes/{ID} callback. */
    QuotesIDPutResponse: {
      transferAmount: components["schemas"]["Money"];
      payeeReceiveAmount?: components["schemas"]["Money"];
      payeeFspFee?: components["schemas"]["Money"];
      payeeFspCommission?: components["schemas"]["Money"];
      expiration: components["schemas"]["DateTime"];
      geoCode?: components["schemas"]["GeoCode"];
      ilpPacket: components["schemas"]["IlpPacket"];
      condition: components["schemas"]["IlpCondition"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /** POST /authorizations Request object */
    AuthorizationsRequest: {
      toParticipantId?: string;
      authenticationType: components["schemas"]["AuthorizationChannelType"];
      retriesLeft: components["schemas"]["Integer"];
      amount: components["schemas"]["Money"];
      transactionId: components["schemas"]["CorrelationId"];
      transactionRequestId: components["schemas"]["CorrelationId"];
      quote: components["schemas"]["QuotesIDPutResponse"];
    };
    /**
     * Below are the allowed values for the enumeration AuthenticationType.
     * - OTP - One-time password generated by the Payer FSP.
     * - QRCODE - QR code used as One Time Password.
     * - U2F - U2F is a new addition isolated to Thirdparty stream.
     */
    AuthenticationType: "OTP" | "QRCODE" | "U2F";
    /** The API data type OtpValue is a JSON String of 3 to 10 characters, consisting of digits only. Negative numbers are not allowed. One or more leading zeros are allowed. */
    OtpValue: string;
    /** QR code used as a One Time Password. */
    QRCODE: string;
    /** U2F challenge-response, where payer FSP verifies if the response provided by end-user device matches the previously registered key. */
    U2FPIN: string;
    /** U2F challenge-response, where payer FSP verifies if the response provided by end-user device matches the previously registered key. */
    U2FPinValue: {
      /** U2F challenge-response. */
      pinValue: components["schemas"]["U2FPIN"];
      /** Sequential counter used for cloning detection. Present only for U2F authentication. */
      counter: components["schemas"]["Integer"];
    };
    /** Contains the authentication value. The format depends on the authentication type used in the AuthenticationInfo complex type. */
    AuthenticationValue: Partial<components["schemas"]["OtpValue"]> &
      Partial<components["schemas"]["QRCODE"]> &
      Partial<components["schemas"]["U2FPinValue"]>;
    /** Data model for the complex type AuthenticationInfo. */
    AuthenticationInfo: {
      authentication: components["schemas"]["AuthenticationType"];
      authenticationValue: components["schemas"]["AuthenticationValue"];
    };
    /**
     * Below are the allowed values for the enumeration.
     * - ENTERED - Consumer entered the authentication value.
     * - REJECTED - Consumer rejected the transaction.
     * - RESEND - Consumer requested to resend the authentication value.
     */
    AuthorizationResponse: "ENTERED" | "REJECTED" | "RESEND";
    /** state of POST authorizations */
    AuthorizationsState:
      | "WAITING_FOR_AUTHORIZATION_REQUEST"
      | "COMPLETED"
      | "ERROR_OCCURRED";
    /**
     * Below are the allowed values for the enumeration.
     * - MSISDN - An MSISDN (Mobile Station International Subscriber Directory Number, that is, the phone number) is used as reference to a participant. The MSISDN identifier should be in international format according to the [ITU-T E.164 standard](https://www.itu.int/rec/T-REC-E.164/en). Optionally, the MSISDN may be prefixed by a single plus sign, indicating the international prefix.
     * - EMAIL - An email is used as reference to a participant. The format of the email should be according to the informational [RFC 3696](https://tools.ietf.org/html/rfc3696).
     * - PERSONAL_ID - A personal identifier is used as reference to a participant. Examples of personal identification are passport number, birth certificate number, and national registration number. The identifier number is added in the PartyIdentifier element. The personal identifier type is added in the PartySubIdOrType element.
     * - BUSINESS - A specific Business (for example, an organization or a company) is used as reference to a participant. The BUSINESS identifier can be in any format. To make a transaction connected to a specific username or bill number in a Business, the PartySubIdOrType element should be used.
     * - DEVICE - A specific device (for example, a POS or ATM) ID connected to a specific business or organization is used as reference to a Party. For referencing a specific device under a specific business or organization, use the PartySubIdOrType element.
     * - ACCOUNT_ID - A bank account number or FSP account ID should be used as reference to a participant. The ACCOUNT_ID identifier can be in any format, as formats can greatly differ depending on country and FSP.
     * - IBAN - A bank account number or FSP account ID is used as reference to a participant. The IBAN identifier can consist of up to 34 alphanumeric characters and should be entered without whitespace.
     * - ALIAS An alias is used as reference to a participant. The alias should be created in the FSP as an alternative reference to an account owner. Another example of an alias is a username in the FSP system. The ALIAS identifier can be in any format. It is also possible to use the PartySubIdOrType element for identifying an account under an Alias defined by the PartyIdentifier.
     */
    PartyIdType:
      | "MSISDN"
      | "EMAIL"
      | "PERSONAL_ID"
      | "BUSINESS"
      | "DEVICE"
      | "ACCOUNT_ID"
      | "IBAN"
      | "ALIAS";
    /** Identifier of the Party. */
    PartyIdentifier: string;
    /** Either a sub-identifier of a PartyIdentifier, or a sub-type of the PartyIdType, normally a PersonalIdentifierType. */
    PartySubIdOrType: string;
    /** FSP identifier. */
    FspId: string;
    /** Data model for the complex type PartyIdInfo. An ExtensionList element has been added to this reqeust in version v1.1 */
    PartyIdInfo: {
      partyIdType: components["schemas"]["PartyIdType"];
      partyIdentifier: components["schemas"]["PartyIdentifier"];
      partySubIdOrType?: components["schemas"]["PartySubIdOrType"];
      fspId?: components["schemas"]["FspId"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /** Thirdparty transaction party lookup request */
    ThirdpartyTransactionPartyLookupRequest: {
      payee?: components["schemas"]["PartyIdInfo"];
      transactionRequestId?: components["schemas"]["CorrelationId"];
    };
    /** A limited set of pre-defined numbers. This list would be a limited set of numbers identifying a set of popular merchant types like School Fees, Pubs and Restaurants, Groceries, etc. */
    MerchantClassificationCode: string;
    /** Name of the Party. Could be a real name or a nickname. */
    PartyName: string;
    /** First name of the Party (Name Type). */
    FirstName: string;
    /** Middle name of the Party (Name Type). */
    MiddleName: string;
    /** Last name of the Party (Name Type). */
    LastName: string;
    /** Data model for the complex type PartyComplexName. */
    PartyComplexName: {
      firstName?: components["schemas"]["FirstName"];
      middleName?: components["schemas"]["MiddleName"];
      lastName?: components["schemas"]["LastName"];
    };
    /** Date of Birth of the Party. */
    DateOfBirth: string;
    /** Data model for the complex type PartyPersonalInfo. */
    PartyPersonalInfo: {
      complexName?: components["schemas"]["PartyComplexName"];
      dateOfBirth?: components["schemas"]["DateOfBirth"];
    };
    /**
     * A long-lived unique account identifier provided by the DFSP. This MUST NOT
     * be Bank Account Number or anything that may expose a User's private bank
     * account information.
     */
    AccountAddress: string;
    /**
     * The API data type Name is a JSON String, restricted by a regular expression to avoid characters which are generally not used in a name.
     *
     * Regular Expression - The regular expression for restricting the Name type is "^(?!\s*$)[\w .,'-]{1,128}$". The restriction does not allow a string consisting of whitespace only, all Unicode characters are allowed, as well as the period (.) (apostrophe (‘), dash (-), comma (,) and space characters ( ).
     *
     * **Note:** In some programming languages, Unicode support must be specifically enabled. For example, if Java is used, the flag UNICODE_CHARACTER_CLASS must be enabled to allow Unicode characters.
     */
    Name: string;
    /** Data model for the complex type Account. */
    Account: {
      address?: components["schemas"]["AccountAddress"];
      currency: components["schemas"]["Currency"];
      description?: components["schemas"]["Name"];
    };
    /** Data model for the complex type AccountList. */
    AccountList: {
      /** Accounts associated with the Party. */
      account: components["schemas"]["Account"][];
    };
    /** state of thirdparty transaction */
    ThirdpartyTransactionState:
      | "start"
      | "partyLookupSuccess"
      | "authorizationReceived"
      | "transactionSuccess";
    /** Data model for the complex type Party. */
    Party: {
      partyIdInfo: components["schemas"]["PartyIdInfo"];
      merchantClassificationCode?: components["schemas"]["MerchantClassificationCode"];
      name?: components["schemas"]["PartyName"];
      personalInfo?: components["schemas"]["PartyPersonalInfo"];
    };
    /**
     * Below are the allowed values for the enumeration AmountType.
     * - SEND - Amount the Payer would like to send, that is, the amount that should be withdrawn from the Payer account including any fees.
     * - RECEIVE - Amount the Payer would like the Payee to receive, that is, the amount that should be sent to the receiver exclusive of any fees.
     */
    AmountType: "SEND" | "RECEIVE";
    /**
     * Below are the allowed values for the enumeration.
     * - DEPOSIT - Used for performing a Cash-In (deposit) transaction. In a normal scenario, electronic funds are transferred from a Business account to a Consumer account, and physical cash is given from the Consumer to the Business User.
     * - WITHDRAWAL - Used for performing a Cash-Out (withdrawal) transaction. In a normal scenario, electronic funds are transferred from a Consumer’s account to a Business account, and physical cash is given from the Business User to the Consumer.
     * - TRANSFER - Used for performing a P2P (Peer to Peer, or Consumer to Consumer) transaction.
     * - PAYMENT - Usually used for performing a transaction from a Consumer to a Merchant or Organization, but could also be for a B2B (Business to Business) payment. The transaction could be online for a purchase in an Internet store, in a physical store where both the Consumer and Business User are present, a bill payment, a donation, and so on.
     * - REFUND - Used for performing a refund of transaction.
     */
    TransactionScenario:
      | "DEPOSIT"
      | "WITHDRAWAL"
      | "TRANSFER"
      | "PAYMENT"
      | "REFUND";
    /** Possible sub-scenario, defined locally within the scheme (UndefinedEnum Type). */
    TransactionSubScenario: string;
    /**
     * Below are the allowed values for the enumeration.
     * - PAYER - Sender of funds is initiating the transaction. The account to send from is either owned by the Payer or is connected to the Payer in some way.
     * - PAYEE - Recipient of the funds is initiating the transaction by sending a transaction request. The Payer must approve the transaction, either automatically by a pre-generated OTP or by pre-approval of the Payee, or by manually approving in his or her own Device.
     */
    TransactionInitiator: "PAYER" | "PAYEE";
    /**
     * Below are the allowed values for the enumeration.
     * - CONSUMER - Consumer is the initiator of the transaction.
     * - AGENT - Agent is the initiator of the transaction.
     * - BUSINESS - Business is the initiator of the transaction.
     * - DEVICE - Device is the initiator of the transaction.
     */
    TransactionInitiatorType: "CONSUMER" | "AGENT" | "BUSINESS" | "DEVICE";
    /** Reason for the refund. */
    RefundReason: string;
    /** Data model for the complex type Refund. */
    Refund: {
      originalTransactionId: components["schemas"]["CorrelationId"];
      refundReason?: components["schemas"]["RefundReason"];
    };
    /** (BopCode) The API data type [BopCode](https://www.imf.org/external/np/sta/bopcode/) is a JSON String of 3 characters, consisting of digits only. Negative numbers are not allowed. A leading zero is not allowed. */
    BalanceOfPayments: string;
    /** Data model for the complex type TransactionType. */
    TransactionType: {
      scenario: components["schemas"]["TransactionScenario"];
      subScenario?: components["schemas"]["TransactionSubScenario"];
      initiator: components["schemas"]["TransactionInitiator"];
      initiatorType: components["schemas"]["TransactionInitiatorType"];
      refundInfo?: components["schemas"]["Refund"];
      balanceOfPayments?: components["schemas"]["BalanceOfPayments"];
    };
    /** The object sent in the POST `/thirdpartyTransaction/{ID}/initiate` request. */
    ThirdpartyRequestsTransactionsPostRequest: {
      sourceAccountId: components["schemas"]["AccountAddress"];
      consentId: components["schemas"]["CorrelationId"];
      payee: components["schemas"]["Party"];
      payer: components["schemas"]["Party"];
      amountType: components["schemas"]["AmountType"];
      amount: components["schemas"]["Money"];
      transactionType: components["schemas"]["TransactionType"];
      expiration: string;
    };
    /** POST /authorizations request object. */
    AuthorizationsPostRequest: {
      authenticationType: components["schemas"]["AuthorizationChannelType"];
      retriesLeft: components["schemas"]["Integer"];
      amount: components["schemas"]["Money"];
      transactionId: components["schemas"]["CorrelationId"];
      transactionRequestId: components["schemas"]["CorrelationId"];
      quote: components["schemas"]["QuotesIDPutResponse"];
    };
    /** The object sent in the PUT /authorizations/{ID} callback. */
    AuthorizationsIDPutResponse: {
      authenticationInfo?: components["schemas"]["AuthenticationInfo"];
      responseType: components["schemas"]["AuthorizationResponse"];
    };
    ThirdpartyTransactionApproveRequest: {
      authorizationResponse?: components["schemas"]["AuthorizationsIDPutResponse"];
    };
    /**
     * Below are the allowed values for the enumeration.
     * - RECEIVED - Payer FSP has received the transaction from the Payee FSP.
     * - PENDING - Payer FSP has sent the transaction request to the Payer.
     * - ACCEPTED - Payer has approved the transaction.
     * - REJECTED - Payer has rejected the transaction.
     */
    TransactionRequestState: "RECEIVED" | "PENDING" | "ACCEPTED" | "REJECTED";
    /** The API data type BinaryString is a JSON String. The string is a base64url  encoding of a string of raw bytes, where padding (character ‘=’) is added at the end of the data if needed to ensure that the string is a multiple of 4 characters. The length restriction indicates the allowed number of characters. */
    BinaryString: string;
    /** The object sent in the POST /thirdpartyRequests/transactions/{id}/authorizations request. */
    ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest: {
      /** Base64 encoded binary string - the original challenge. */
      challenge: string;
      /** Base64 encoded binary string - the signed challenge */
      value: components["schemas"]["BinaryString"];
      /** Common ID between the PISP and FSP for the Consent object This tells DFSP and auth-service which constent allows the PISP to initiate transaction. */
      consentId: components["schemas"]["CorrelationId"];
      /** DFSP specific account identifiers, e.g. `dfspa.alice.1234` */
      sourceAccountId: components["schemas"]["AccountAddress"];
      /** The status of the authorization. This MUST be PENDING for a POST request */
      status: "PENDING";
    };
    /** The object sent in the PUT /thirdpartyRequests/transactions/{id}/authorizations request. */
    ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse: {
      /** Base64 encoded binary string - the original challenge. */
      challenge: string;
      /** Base64 encoded binary string - the signed challenge. */
      value: components["schemas"]["BinaryString"];
      /** Common ID between the PISP and FSP for the Consent object This tells DFSP and auth-service which consent allows the PISP to initiate transaction. */
      consentId: components["schemas"]["CorrelationId"];
      /** DFSP specific account identifiers, e.g. `dfspa.alice.1234` */
      sourceAccountId: components["schemas"]["AccountAddress"];
      /** The status of the authorization. This value must be `VERIFIED` for a PUT request. */
      status: "VERIFIED";
    };
    ConsentRequestValidateRequest: {
      authToken: string;
    };
  };
  responses: {
    /** OK */
    "200": {};
    /** Bad Request */
    "400": {
      content: {
        "application/json": components["schemas"]["ErrorInformationResponse"];
      };
      headers: {
        "Content-Length": components["headers"]["Content-Length"];
        "Content-Type": components["headers"]["Content-Type"];
      };
    };
    /** Unauthorized */
    "401": {
      content: {
        "application/json": components["schemas"]["ErrorInformationResponse"];
      };
      headers: {
        "Content-Length": components["headers"]["Content-Length"];
        "Content-Type": components["headers"]["Content-Type"];
      };
    };
    /** Forbidden */
    "403": {
      content: {
        "application/json": components["schemas"]["ErrorInformationResponse"];
      };
      headers: {
        "Content-Length": components["headers"]["Content-Length"];
        "Content-Type": components["headers"]["Content-Type"];
      };
    };
    /** Not Found */
    "404": {
      content: {
        "application/json": components["schemas"]["ErrorInformationResponse"];
      };
      headers: {
        "Content-Length": components["headers"]["Content-Length"];
        "Content-Type": components["headers"]["Content-Type"];
      };
    };
    /** Method Not Allowed */
    "405": {
      content: {
        "application/json": components["schemas"]["ErrorInformationResponse"];
      };
      headers: {
        "Content-Length": components["headers"]["Content-Length"];
        "Content-Type": components["headers"]["Content-Type"];
      };
    };
    /** Not Acceptable */
    "406": {
      content: {
        "application/json": components["schemas"]["ErrorInformationResponse"];
      };
      headers: {
        "Content-Length": components["headers"]["Content-Length"];
        "Content-Type": components["headers"]["Content-Type"];
      };
    };
    /** Not Implemented */
    "501": {
      content: {
        "application/json": components["schemas"]["ErrorInformationResponse"];
      };
      headers: {
        "Content-Length": components["headers"]["Content-Length"];
        "Content-Type": components["headers"]["Content-Type"];
      };
    };
    /** Service Unavailable */
    "503": {
      content: {
        "application/json": components["schemas"]["ErrorInformationResponse"];
      };
      headers: {
        "Content-Length": components["headers"]["Content-Length"];
        "Content-Type": components["headers"]["Content-Type"];
      };
    };
    /**
     * response body of POST/authorizations
     * derived from AuthorizationsIDPutResponse by Inbound Service via Pub/Sub channel
     */
    AuthorizationsResponse: {
      content: {
        "application/json": {
          authenticationInfo?: components["schemas"]["AuthenticationInfo"];
          responseType: components["schemas"]["AuthorizationResponse"];
          currentState?: components["schemas"]["AuthorizationsState"];
        };
      };
    };
    /** Thirdparty transaction party lookup response */
    ThirdpartyTransactionPartyLookupResponse: {
      content: {
        "application/json": {
          party?: {
            partyIdInfo?: components["schemas"]["PartyIdInfo"];
            merchantClassificationCode?: components["schemas"]["MerchantClassificationCode"];
            name?: components["schemas"]["PartyName"];
            personalInfo?: components["schemas"]["PartyPersonalInfo"];
            accounts?: components["schemas"]["AccountList"];
          };
          currentState?: components["schemas"]["ThirdpartyTransactionState"];
        };
      };
    };
    /** Thirdparty transaction initiate response */
    ThirdpartyRequestsTransactionsPostResponse: {
      content: {
        "application/json": {
          authorization?: components["schemas"]["AuthorizationsPostRequest"];
          currentState?: components["schemas"]["ThirdpartyTransactionState"];
        };
      };
    };
    /** Thirdparty transaction approve response */
    ThirdpartyTransactionApproveResponse: {
      content: {
        "application/json": {
          transactionStatus?: {
            transactionId?: components["schemas"]["CorrelationId"];
            transactionRequestState?: components["schemas"]["TransactionRequestState"];
          };
          currentState?: components["schemas"]["ThirdpartyTransactionState"];
        };
      };
    };
    /** Thirdparty requests transactions authorizations response */
    ThirdpartyRequestsTransactionsIDAuthzResponse: {
      content: {
        "application/json": components["schemas"]["ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse"];
      };
    };
  };
}
