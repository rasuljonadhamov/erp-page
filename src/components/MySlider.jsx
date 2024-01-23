import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

const MySlider = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: "10px",
          borderBottom: "1px solid #bc8e5b",
          marginBottom: "10px",
        }}
      >
        <svg
          width="40"
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.0654 12.0162L57.5019 12.2935C54.4933 12.8274 51.5383 13.6348 48.6725 14.7059V6.04044L47.8383 6.41941C45.9512 7.27903 44.1598 8.18024 42.4504 9.12767L42.3957 0.0647025L41.484 0.651646C37.1603 3.44229 33.1295 6.67423 29.4547 10.2969C25.7935 6.81187 21.8941 3.59338 17.7855 0.665511L16.8738 0V9.3911C15.014 8.3343 13.1102 7.37146 11.1623 6.5026L10.3327 6.13749L10.3691 14.1745C7.59935 13.2011 4.72863 12.5529 1.81322 12.2426L0.413818 12.0994L11.609 26.2877L11.5588 15.9029C13.3832 16.625 15.1587 17.4679 16.8738 18.4263V27.4154L16.9923 27.5771C20.2834 32.0693 28.9396 39.3761 29.2997 39.6857L29.6735 40L30.0518 39.6857C30.4165 39.3807 39.0818 32.1479 42.3592 27.4801L42.5552 27.1473L42.5005 18.7776C44.1222 17.9107 45.7867 17.1286 47.4873 16.4344V26.3432L59.0654 12.0162ZM48.6725 15.9861C51.0934 15.0549 53.5821 14.3163 56.1161 13.777L48.6725 23.0202V15.9861ZM3.08954 13.6291C5.56312 13.999 7.99411 14.6182 10.3463 15.4778L10.3828 22.8723L3.08954 13.6291ZM41.2242 2.25534V9.81629C38.6523 11.307 36.1932 12.9892 33.8671 14.8492C33.3703 14.2946 32.8552 13.74 32.331 13.1854C31.6685 12.4922 30.9893 11.802 30.2934 11.115C33.6506 7.81199 37.3142 4.84505 41.2333 2.25534M21.4002 19.8174C20.2971 19.0657 19.1803 18.3632 18.0499 17.71V11.4754C20.2456 12.8224 22.3613 14.2993 24.3859 15.8983C23.3496 17.1646 22.3544 18.4741 21.4002 19.8267M25.293 16.6378C26.4417 17.5621 27.5721 18.565 28.657 19.5864C27.6025 20.6647 26.5708 21.7986 25.5619 22.9879C24.6503 22.2068 23.5563 21.3657 22.3711 20.5061C23.3101 19.1812 24.2886 17.8918 25.3067 16.6378M32.9783 15.5979C31.7885 16.5962 30.6353 17.6407 29.5094 18.7452C28.385 17.6946 27.2363 16.684 26.0633 15.7135C27.1604 14.4163 28.3015 13.1608 29.4866 11.9469C30.7173 13.1516 31.8812 14.3655 32.9783 15.5887M32.8005 23.8059C31.2233 25.0907 30.1293 26.1167 29.5641 26.6898C29.0217 26.1167 27.9733 25.0537 26.4827 23.7504C27.4764 22.5765 28.4929 21.4597 29.5322 20.3998C30.6596 21.4905 31.749 22.6258 32.8005 23.8059ZM25.7169 24.6655C26.9109 25.6914 28.0433 26.7887 29.1083 27.9515L29.5413 28.446L29.9971 27.9838C31.1301 26.819 32.3344 25.7277 33.6027 24.7163C34.3473 25.5698 35.0675 26.4464 35.7634 27.346L29.71 33.1092L23.5882 27.3692C24.2856 26.4448 24.9876 25.5205 25.7032 24.6701M30.3572 19.5633C31.4603 18.4818 32.5863 17.4604 33.7577 16.4853C34.955 17.8625 36.0657 19.249 37.0898 20.6447L36.7662 20.8619C35.6312 21.6337 34.6147 22.3824 33.7167 23.0757C32.6349 21.8648 31.515 20.6971 30.3572 19.5725M34.6694 15.7504C36.7546 14.088 38.9492 12.5717 41.2379 11.212V18.1167C40.0892 18.7499 39.0317 19.383 38.0699 19.9977C37.0245 18.5773 35.888 17.1616 34.6603 15.7504M18.0407 2.3108C21.757 5.0102 25.2943 7.95435 28.6297 11.1242C28.0143 11.7527 27.4126 12.3859 26.8063 13.0375C26.2001 13.6892 25.6896 14.327 25.1517 14.9786C22.8945 13.1917 20.5253 11.5553 18.059 10.0797L18.0407 2.3108ZM13.2409 15.3021C12.6756 15.0572 12.1058 14.84 11.5361 14.6089L11.5041 7.97689C13.3275 8.81802 15.1128 9.74234 16.8601 10.7499V17.063C15.6613 16.4159 14.4534 15.8244 13.2409 15.3021ZM20.7119 20.7972C19.782 22.156 18.8916 23.5532 18.0407 24.989V19.1057C19.0025 19.6742 19.896 20.2473 20.7119 20.8065M29.6735 38.4471C27.996 37.0098 21.1267 31.0526 18.1547 27.1704C19.2639 25.1985 20.4384 23.3021 21.6783 21.4812C22.8406 22.3131 23.889 23.1358 24.8007 23.8983C23.962 24.9151 23.1415 25.978 22.3255 27.0872L22.0065 27.517L29.71 34.7452L37.3223 27.4523L36.9896 27.0225C36.1873 25.978 35.3562 24.9582 34.4962 23.963C35.3577 23.2975 36.3195 22.5765 37.4135 21.8463L37.7827 21.6014C39.034 23.3534 40.1743 25.1842 41.1969 27.0826C38.2385 31.0895 31.3555 37.0191 29.6735 38.4471ZM41.2561 24.7718C40.5086 23.5055 39.6835 22.233 38.781 20.9544C39.5422 20.4691 40.3673 19.97 41.247 19.4708L41.2561 24.7718ZM42.5051 17.4327L42.4595 10.5003C44.0595 9.57597 45.7324 8.73021 47.4736 7.90757V15.145C45.6777 15.8614 44.0139 16.6424 42.4869 17.4327"
            fill="#AE8C5E"
          ></path>
        </svg>
        {!collapsed && <span className="site__logo-title">Teacher</span>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <VideoCameraOutlined />,
            label: "Gruhlarim",
          },
          {
            key: "2",
            icon: <UserOutlined />,
            label: "Profile",
          },
        ]}
      />
    </Sider>
  );
};

export default MySlider;