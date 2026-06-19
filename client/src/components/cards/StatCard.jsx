function StatCard({
  title,
  value,
  icon,
}) {

  const Icon = icon;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <Icon
            size={24}
            className="text-blue-900"
          />
        </div>

      </div>

    </div>
  );
}

export default StatCard;