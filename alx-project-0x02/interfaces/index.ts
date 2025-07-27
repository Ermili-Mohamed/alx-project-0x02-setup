export interface CardProps {
 title: string;
 content: string;
}


export interface ButtonProps {
 size?: 'small' | 'medium' | 'large';
 shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
 children: React.ReactNode;
 onClick?: () => void;
}

export interface PostProps {
 userId: number;
 title: string;
 content: string;
}

// interfaces/index.ts

export interface UserProps {
 id: number;
 name: string;
 email: string;
 address: {
  street: string;
  city: string;
 };
}
