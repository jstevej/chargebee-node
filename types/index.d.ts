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
    export function configure({ site, api_key }: { site: string; api_key: string }): void;
    export const address: Address.AddressResource;
    export const attached_item: AttachedItem.AttachedItemResource;
    export const card: Card.CardResource;
    export const comment: Comment.CommentResource;
    export const coupon: Coupon.CouponResource;
    export const coupon_code: CouponCode.CouponCodeResource;
    export const coupon_set: CouponSet.CouponSetResource;
    export const credit_note: CreditNote.CreditNoteResource;
    export const customer: Customer.CustomerResource;
    export const differential_price: DifferentialPrice.DifferentialPriceResource;
    export const entitlement_override: EntitlementOverride.EntitlementOverrideResource;
    export const estimate: Estimate.EstimateResource;
    export const event: Event.EventResource;
    //export const export: Export.ExportResource;
    export const feature: Feature.FeatureResource;
    export const gift: Gift.GiftResource;
    export const hosted_page: HostedPage.HostedPageResource;
    export const in_app_subscription: InAppSubscription.InAppSubscriptionResource;
    export const invoice: Invoice.InvoiceResource;
    export const item: Item.ItemResource;
    export const item_entitlement: ItemEntitlement.ItemEntitlementResource;
    export const item_family: ItemFamily.ItemFamilyResource;
    export const item_price: ItemPrice.ItemPriceResource;
    export const non_subscription: NonSubscription.NonSubscriptionResource;
    export const order: Order.OrderResource;
    export const payment_intent: PaymentIntent.PaymentIntentResource;
    export const payment_source: PaymentSource.PaymentSourceResource;
    export const payment_voucher: PaymentVoucher.PaymentVoucherResource;
    export const portal_session: PortalSession.PortalSessionResource;
    export const promotional_credit: PromotionalCredit.PromotionalCreditResource;
    export const purchase: Purchase.PurchaseResource;
    export const quote: Quote.QuoteResource;
    export const resource_migration: ResourceMigration.ResourceMigrationResource;
    export const site_migration_detail: SiteMigrationDetail.SiteMigrationDetailResource;
    export const subscription: Subscription.SubscriptionResource;
    export const subscription_entitlement: SubscriptionEntitlement.SubscriptionEntitlementResource;
    export const time_machine: TimeMachine.TimeMachineResource;
    export const token: Token.TokenResource;
    export const transaction: Transaction.TransactionResource;
    export const unbilled_charge: UnbilledCharge.UnbilledChargeResource;
    export const usage: Usage.UsageResource;
    export const virtual_bank_account: VirtualBankAccount.VirtualBankAccountResource;

}
