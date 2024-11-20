export const isProfileVerified = (isVerified: boolean) => {
  return (
    <img
      src={'/check-circle.png'}
      alt={isVerified ? "Verified" : "Not Verified"}
      className={`w-4 h-4 inline  ml-2 ${!isVerified ? 'hidden' : ''}`}
    />
  );
};
