///<reference path='./core.d.ts' />
///<reference path='./resources/Address.d.ts' />
///<reference path='./resources/AttachedItem.d.ts' />
///<reference path='./resources/Card.d.ts' />
///<reference path='./resources/Comment.d.ts' />
///<reference path='./resources/Coupon.d.ts' />
///<reference path='./resources/CouponCode.d.ts' />
///<reference path='./resources/CouponSet.d.ts' />
///<reference path='./resources/CreditNote.d.ts' />
///<reference path='./resources/Customer.d.ts' />
///<reference path='./resources/DifferentialPrice.d.ts' />
///<reference path='./resources/EntitlementOverride.d.ts' />
///<reference path='./resources/Estimate.d.ts' />
///<reference path='./resources/Event.d.ts' />
///<reference path='./resources/Export.d.ts' />
///<reference path='./resources/Feature.d.ts' />
///<reference path='./resources/Gift.d.ts' />
///<reference path='./resources/HostedPage.d.ts' />
///<reference path='./resources/InAppSubscription.d.ts' />
///<reference path='./resources/Invoice.d.ts' />
///<reference path='./resources/Item.d.ts' />
///<reference path='./resources/ItemEntitlement.d.ts' />
///<reference path='./resources/ItemFamily.d.ts' />
///<reference path='./resources/ItemPrice.d.ts' />
///<reference path='./resources/NonSubscription.d.ts' />
///<reference path='./resources/Order.d.ts' />
///<reference path='./resources/PaymentIntent.d.ts' />
///<reference path='./resources/PaymentSource.d.ts' />
///<reference path='./resources/PaymentVoucher.d.ts' />
///<reference path='./resources/PortalSession.d.ts' />
///<reference path='./resources/PromotionalCredit.d.ts' />
///<reference path='./resources/Purchase.d.ts' />
///<reference path='./resources/Quote.d.ts' />
///<reference path='./resources/ResourceMigration.d.ts' />
///<reference path='./resources/SiteMigrationDetail.d.ts' />
///<reference path='./resources/Subscription.d.ts' />
///<reference path='./resources/SubscriptionEntitlement.d.ts' />
///<reference path='./resources/TimeMachine.d.ts' />
///<reference path='./resources/Token.d.ts' />
///<reference path='./resources/Transaction.d.ts' />
///<reference path='./resources/UnbilledCharge.d.ts' />
///<reference path='./resources/Usage.d.ts' />
///<reference path='./resources/VirtualBankAccount.d.ts' />

declare module 'chargebee' {
  export interface Chargebee {
    configure({ site, api_key }: { site: string; api_key: string }): void;
    address: Address.AddressResource;
    attached_item: AttachedItem.AttachedItemResource;
    card: Card.CardResource;
    comment: Comment.CommentResource;
    coupon: Coupon.CouponResource;
    coupon_code: CouponCode.CouponCodeResource;
    coupon_set: CouponSet.CouponSetResource;
    credit_note: CreditNote.CreditNoteResource;
    customer: Customer.CustomerResource;
    differential_price: DifferentialPrice.DifferentialPriceResource;
    entitlement_override: EntitlementOverride.EntitlementOverrideResource;
    estimate: Estimate.EstimateResource;
    event: Event.EventResource;
    export: Export.ExportResource;
    feature: Feature.FeatureResource;
    gift: Gift.GiftResource;
    hosted_page: HostedPage.HostedPageResource;
    in_app_subscription: InAppSubscription.InAppSubscriptionResource;
    invoice: Invoice.InvoiceResource;
    item: Item.ItemResource;
    item_entitlement: ItemEntitlement.ItemEntitlementResource;
    item_family: ItemFamily.ItemFamilyResource;
    item_price: ItemPrice.ItemPriceResource;
    non_subscription: NonSubscription.NonSubscriptionResource;
    order: Order.OrderResource;
    payment_intent: PaymentIntent.PaymentIntentResource;
    payment_source: PaymentSource.PaymentSourceResource;
    payment_voucher: PaymentVoucher.PaymentVoucherResource;
    portal_session: PortalSession.PortalSessionResource;
    promotional_credit: PromotionalCredit.PromotionalCreditResource;
    purchase: Purchase.PurchaseResource;
    quote: Quote.QuoteResource;
    resource_migration: ResourceMigration.ResourceMigrationResource;
    site_migration_detail: SiteMigrationDetail.SiteMigrationDetailResource;
    subscription: Subscription.SubscriptionResource;
    subscription_entitlement: SubscriptionEntitlement.SubscriptionEntitlementResource;
    time_machine: TimeMachine.TimeMachineResource;
    token: Token.TokenResource;
    transaction: Transaction.TransactionResource;
    unbilled_charge: UnbilledCharge.UnbilledChargeResource;
    usage: Usage.UsageResource;
    virtual_bank_account: VirtualBankAccount.VirtualBankAccountResource;
    
  }

    const chargebee: Chargebee;
    export default chargebee;
}
