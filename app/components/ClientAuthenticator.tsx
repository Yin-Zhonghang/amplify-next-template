'use client';

// Client-side authenticator component that wraps Amplify Authenticator
// 客户端身份验证组件，包装 Amplify Authenticator

import * as React from 'react';

// Import from aws-amplify library directly 
// 直接从 aws-amplify 库导入
import '../lib/amplify'; // Import the Amplify configuration first
// 首先导入 Amplify 配置

// Import styles directly
// 直接导入样式
import '@aws-amplify/ui-react/styles.css';

// Dynamic import for the Authenticator component to avoid SSR issues
// 动态导入 Authenticator 组件以避免 SSR 问题
import dynamic from 'next/dynamic';

const Authenticator = dynamic(
    () => import('@aws-amplify/ui-react').then((mod) => mod.Authenticator),
    { ssr: false }
);

interface ClientAuthenticatorProps {
    children: React.ReactNode;
}

export default function ClientAuthenticator({ children }: ClientAuthenticatorProps) {
    // Only render on client side
    // 仅在客户端渲染
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Return a placeholder or loading state when server-side rendering
        // 在服务器端渲染时返回一个占位符或加载状态
        return <>{children}</>;
    }

    return (
        <Authenticator>
            {children}
        </Authenticator>
    );
} 