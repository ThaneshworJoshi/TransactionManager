import CommonLayout from "../../../common/components/Layouts/CommonLayout/CommonLayout";

const HomeTemplate = () => {
  return (
    <>
      <CommonLayout>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-600">Updating Soon</h1>
            <p className="mt-4 text-xl font-semibold">We're working hard to bring you new features.</p>
            <p className="mt-2 text-lg">Please check back later.</p>
          </div>
        </div>
      </CommonLayout>
    </>
  );
};

export default HomeTemplate;