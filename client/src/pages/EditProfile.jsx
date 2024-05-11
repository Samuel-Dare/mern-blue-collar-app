import ChangePassword from '../features/authentication/UpdatePassword';
import ChangeProfileDetails from '../features/authentication/UpdateUserProfileDetails';

function EditProfile() {
  return (
    <div
      className="ml-auto mr-auto
        w-full space-y-10 md:gap-5 lg:w-1/2
     "
    >
      <ChangeProfileDetails />
      <ChangePassword />
    </div>
  );
}

export default EditProfile;
