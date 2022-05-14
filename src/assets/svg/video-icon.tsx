export const VideocamOutlinedIcon = ({ isActive }: any) => {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '5px' }}
    >
      <path
        d="M16.9418 0.958334C16.8151 0.885194 16.6714 0.846688 16.5251 0.846688C16.3788 0.846688 16.2351 0.885194 16.1084 0.958334L13.1667 2.40833C13.143 1.76131 12.8692 1.14873 12.4029 0.699533C11.9366 0.250337 11.3142 -0.000434812 10.6667 5.65964e-07H3.16675C2.50371 5.65964e-07 1.86782 0.263393 1.39898 0.732234C0.93014 1.20107 0.666748 1.83696 0.666748 2.5V7.5C0.666748 8.16304 0.93014 8.79893 1.39898 9.26777C1.86782 9.73661 2.50371 10 3.16675 10H10.6667C11.3142 10.0004 11.9366 9.74966 12.4029 9.30047C12.8692 8.85127 13.143 8.23869 13.1667 7.59167L16.1334 9.075C16.247 9.13323 16.3725 9.1646 16.5001 9.16667C16.6561 9.16717 16.8091 9.12386 16.9418 9.04167C17.0618 8.96661 17.1608 8.86218 17.2294 8.73825C17.2979 8.61431 17.3337 8.47495 17.3334 8.33333V1.66667C17.3337 1.52505 17.2979 1.38569 17.2294 1.26175C17.1608 1.13782 17.0618 1.03339 16.9418 0.958334ZM11.5001 7.5C11.5001 7.72101 11.4123 7.93298 11.256 8.08926C11.0997 8.24554 10.8878 8.33333 10.6667 8.33333H3.16675C2.94573 8.33333 2.73377 8.24554 2.57749 8.08926C2.42121 7.93298 2.33341 7.72101 2.33341 7.5V2.5C2.33341 2.27899 2.42121 2.06703 2.57749 1.91074C2.73377 1.75446 2.94573 1.66667 3.16675 1.66667H10.6667C10.8878 1.66667 11.0997 1.75446 11.256 1.91074C11.4123 2.06703 11.5001 2.27899 11.5001 2.5V7.5ZM15.6667 6.98333L13.1667 5.73333V4.26667L15.6667 3.01667V6.98333Z"
        fill={isActive ? 'white' : '#38568F'}
      />
    </svg>
  );
};