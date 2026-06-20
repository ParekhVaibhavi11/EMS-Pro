function PayrollTable({
  payrolls,
  onMarkPaid,
}) {

  return (

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>

         <tr className="border-b">

  <th className="p-3 text-left">
    Employee
  </th>

  <th className="p-3 text-left">
    Month
  </th>

  <th className="p-3 text-left">
    Basic
  </th>

  <th className="p-3 text-left">
    Bonus
  </th>

  <th className="p-3 text-left">
    Tax
  </th>

  <th className="p-3 text-left">
    Net Salary
  </th>

  <th className="p-3 text-left">
    Status
  </th>

  <th className="p-3 text-left">
    Action
  </th>

</tr>

        </thead>

        <tbody>

          {payrolls.map(
            (payroll) => (

              <tr
                key={payroll.id}
                className="border-b"
              >

                <td className="p-3">

                  {
                    payroll.employee
                      ?.firstName
                  }
                  {" "}
                  {
                    payroll.employee
                      ?.lastName
                  }

                </td>

                <td className="p-3">
                  {payroll.month}
                </td>

                <td className="p-3">
                  {payroll.year}
                </td>

                <td className="p-3">
                ₹{payroll.basicSalary}
                </td>

                <td className="p-3 text-green-600">
                ₹{payroll.bonus}
                </td>

                <td className="p-3 text-red-600">
                ₹{payroll.tax}
                </td>

                <td className="p-3 font-semibold text-green-700">
                  ₹{payroll.netSalary}
                </td>

                <td className="p-3">

                  <span
                    className={
                      payroll.paymentStatus === "PAID"
                        ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
                        : "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs"
                    }
                  >
                    {payroll.paymentStatus}
                  </span>

                </td>

                <td className="p-3">

                  {payroll.paymentStatus ===
                  "PENDING" ? (

                    <button
                      onClick={() =>
                        onMarkPaid(
                          payroll.id
                        )
                      }
                      className="
                        bg-blue-900
                        text-white
                        px-3 py-1
                        rounded-lg
                      "
                    >
                      Pay
                    </button>

                  ) : (

                    <span className="text-gray-400">
                      Completed
                    </span>

                  )}

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );
}

export default PayrollTable;