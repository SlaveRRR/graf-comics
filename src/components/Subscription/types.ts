export interface SubscriptionCardType {
  id: number;
  price: number;
  duration: string;
  description: string;
  benefits: string;
}

export interface SubscriptionProps {
  plans?: SubscriptionCardType[];
}
