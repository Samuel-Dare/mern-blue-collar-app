import ChangePassword from './ChangePassword';
import ChangeProfileDetails from './ChangeProfileDetails';

function EditProfile() {
  return (
    <div
      className="w-full
        space-y-10  md:gap-5
        "
    >
      <ChangeProfileDetails />
      <ChangePassword />
      {/* <Profile /> */}
    </div>
  );
}

export default EditProfile;
