import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  Users, ShoppingCart, DollarSign, TrendingUp, Bell, Search, Settings, 
  Calendar, Download, Eye, Heart, MessageSquare, Share2, Menu, X,
  Activity, Package, CreditCard, UserPlus, Filter, MoreVertical,
  ArrowUp, ArrowDown, Zap, Target, Globe, Smartphone
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(3);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const salesData = [
    { name: 'Jan', penjualan: 4000, profit: 2400, users: 1200 },
    { name: 'Feb', penjualan: 3000, profit: 1398, users: 1100 },
    { name: 'Mar', penjualan: 5000, profit: 4800, users: 1600 },
    { name: 'Apr', penjualan: 2780, profit: 3908, users: 1300 },
    { name: 'May', penjualan: 6890, profit: 5800, users: 2100 },
    { name: 'Jun', penjualan: 7390, profit: 6300, users: 2400 }
  ];

  const pieData = [
    { name: 'Desktop', value: 45, color: '#6366f1' },
    { name: 'Mobile', value: 35, color: '#8b5cf6' },
    { name: 'Tablet', value: 20, color: '#06b6d4' }
  ];

  const StatCard = ({ title, value, icon: Icon, change, color, gradient }) => (
    <div style={{
      background: gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      padding: '24px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    }}>
      <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}>
        <Icon style={{ width: '80px', height: '80px' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <Icon style={{ width: '32px', height: '32px', opacity: 0.8 }} />
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '14px',
            backgroundColor: change > 0 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
            padding: '4px 8px',
            borderRadius: '12px'
          }}>
            {change > 0 ? <ArrowUp style={{ width: '14px', height: '14px', marginRight: '4px' }} /> 
                        : <ArrowDown style={{ width: '14px', height: '14px', marginRight: '4px' }} />}
            {Math.abs(change)}%
          </div>
        </div>
        <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>{title}</div>
        <div style={{ fontSize: '28px', fontWeight: '700', lineHeight: 1 }}>{value}</div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div style={{
      width: sidebarOpen ? '280px' : '70px',
      background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: sidebarOpen ? '0 25px 25px 0' : '0 15px 15px 0',
      margin: '10px 0 10px 10px',
      boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
    }}>
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ 
            fontSize: '24px', 
            fontWeight: '800', 
            color: 'white',
            display: sidebarOpen ? 'block' : 'none'
          }}>
            <span style={{ color: '#6366f1' }}>Dash</span>Board
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              padding: '8px',
              borderRadius: '12px',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              border: 'none',
              color: '#6366f1',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.2)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.1)'}
          >
            {sidebarOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
          </button>
        </div>
      </div>
      
      <nav style={{ paddingTop: '20px' }}>
        {[
          { id: 'overview', label: 'Overview', icon: Activity, color: '#6366f1' },
          { id: 'analytics', label: 'Analytics', icon: BarChart, color: '#8b5cf6' },
          { id: 'users', label: 'Users', icon: Users, color: '#06b6d4' },
          { id: 'products', label: 'Products', icon: Package, color: '#10b981' },
          { id: 'orders', label: 'Orders', icon: ShoppingCart, color: '#f59e0b' },
          { id: 'settings', label: 'Settings', icon: Settings, color: '#ef4444' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '16px 24px',
              margin: '4px 12px',
              borderRadius: '16px',
              border: 'none',
              backgroundColor: activeTab === item.id ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
              color: activeTab === item.id ? '#6366f1' : '#94a3b8',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== item.id) {
                e.target.style.backgroundColor = 'rgba(148, 163, 184, 0.1)';
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== item.id) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#94a3b8';
              }
            }}
          >
            <item.icon style={{ width: '22px', height: '22px' }} />
            {sidebarOpen && <span style={{ marginLeft: '16px' }}>{item.label}</span>}
            {activeTab === item.id && (
              <div style={{
                position: 'absolute',
                right: '12px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#6366f1'
              }} />
            )}
          </button>
        ))}
      </nav>
    </div>
  );

  const Header = () => (
    <header style={{
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      padding: '16px 32px',
      margin: '10px 20px 0 0',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: '#1e293b', 
              margin: 0,
              textTransform: 'capitalize'
            }}>
              {activeTab}
            </h2>
            <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
              {currentTime.toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {currentTime.toLocaleTimeString('id-ID')}
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <Search style={{ 
              width: '20px', 
              height: '20px', 
              position: 'absolute', 
              left: '16px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#94a3b8' 
            }} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              style={{
                paddingLeft: '48px',
                paddingRight: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                border: '2px solid transparent',
                borderRadius: '16px',
                backgroundColor: '#f8fafc',
                fontSize: '14px',
                width: '300px',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#6366f1';
                e.target.style.backgroundColor = 'white';
                e.target.style.boxShadow = '0 0 0 4px rgba(99, 102, 241, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'transparent';
                e.target.style.backgroundColor = '#f8fafc';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <button style={{
            position: 'relative',
            padding: '12px',
            backgroundColor: '#f8fafc',
            border: 'none',
            borderRadius: '16px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e2e8f0';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#f8fafc';
            e.target.style.transform = 'scale(1)';
          }}>
            <Bell style={{ width: '20px', height: '20px', color: '#64748b' }} />
            {notifications > 0 && (
              <span style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                backgroundColor: '#ef4444',
                color: 'white',
                fontSize: '11px',
                fontWeight: '600',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'pulse 2s infinite'
              }}>
                {notifications}
              </span>
            )}
          </button>
          
          <div style={{
            width: '44px',
            height: '44px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
          }}>
            A
          </div>
        </div>
      </div>
    </header>
  );

  const OverviewContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        <StatCard 
          title="Total Revenue" 
          value="$124,592" 
          icon={DollarSign} 
          change={12.5} 
          gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        />
        <StatCard 
          title="Active Users" 
          value="23,456" 
          icon={Users} 
          change={8.2} 
          gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        />
        <StatCard 
          title="Total Orders" 
          value="3,249" 
          icon={ShoppingCart} 
          change={15.3} 
          gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.24%" 
          icon={Target} 
          change={-2.1} 
          gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        />
      </div>

      {/* Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
              Revenue Analytics
            </h3>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#f1f5f9',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              color: '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Filter style={{ width: '16px', height: '16px' }} />
              Last 6 months
            </button>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="penjualan" 
                stroke="#6366f1" 
                strokeWidth={3}
                fill="url(#colorRevenue)" 
              />
              <Area 
                type="monotone" 
                dataKey="profit" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                fill="url(#colorProfit)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '24px' }}>
            Traffic Sources
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                strokeWidth={0}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {pieData.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    backgroundColor: item.color 
                  }} />
                  <span style={{ fontSize: '14px', color: '#64748b' }}>{item.name}</span>
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
            Recent Activity
          </h3>
          <button style={{
            color: '#6366f1',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            View All
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { action: 'New user registration', time: '2 minutes ago', type: 'user', color: '#10b981' },
            { action: 'Payment received #1234', time: '5 minutes ago', type: 'payment', color: '#6366f1' },
            { action: 'Product updated', time: '12 minutes ago', type: 'product', color: '#f59e0b' },
            { action: 'Order completed #5678', time: '18 minutes ago', type: 'order', color: '#8b5cf6' }
          ].map((activity, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px',
              borderRadius: '16px',
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: activity.color,
                boxShadow: `0 0 0 4px ${activity.color}20`
              }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '15px', color: '#1e293b', margin: 0, fontWeight: '500' }}>
                  {activity.action}
                </p>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>
                  {activity.time}
                </p>
              </div>
              <MoreVertical style={{ width: '16px', height: '16px', color: '#cbd5e1' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'analytics':
      case 'users':
      case 'products':
      case 'orders':
      case 'settings':
        return (
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '48px',
            textAlign: 'center',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <Package style={{ 
              width: '64px', 
              height: '64px', 
              color: '#202124ff', 
              margin: '0 auto 24px' 
            }} />
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: '#575757ff', 
              margin: '0 0 12px 0' 
            }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Page
            </h3>
            <p style={{ fontSize: '16px', color: '#6b7280', margin: 0 }}>
              Content for {activeTab} page will be added here.
            </p>
          </div>
        );
      default: return <OverviewContent />;
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
      
      <Sidebar />
      
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Header />
        
        <main style={{
          flex: 1,
          overflow: 'auto',
          padding: '0 20px 20px 0'
        }}>
          <div style={{ padding: '24px' }}>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;