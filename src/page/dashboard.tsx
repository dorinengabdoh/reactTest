import Sunny from "../assets/icons/soleil.svg";
import Users from "../assets/icons/users.svg";
import Config from "../assets/icons/check.svg";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { PureComponent } from "react";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Apr",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "May",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Jul",
    uv: 2000,
    pv: 6800,
    amt: 2200,
  },
  {
    name: "Aug",
    uv: 2181,
    pv: 3800,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3246,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 2100,
    pv: 3490,
    amt: 2210,
  },
  {
    name: "Nov",
    uv: 1200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Dec",
    uv: 9800,
    pv: 4800,
    amt: 2000,
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="flex gap-8 items-stretch flex-col lg:flex-row px-3 lg:px-0">
        <div className="card max-w-[300px] flex flex-col justify-between gap-8 mt-2">
          <div className="flex items-center gap-3">
            <img src={Sunny} />
            <div className="flex flex-col gap-0 text-[#d941ff]">
              <span className="text-2xl">15:30:09 PM</span>
              <span className="text-[12px]">Realtime Inside </span>
            </div>
          </div>
          <div className="text-xl">
            Today:
            <br />
            23rd March 20024
          </div>

          <div className="flex justify-center">
            <button className="py-2 px-4 rounded-xl text-base text-white bg-[#6e6ef7]">
              View Attendance
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-auto">
          <div className="card w-full">
            <div className="flex items-center justify-between ">
              <h4 className="text-4xl">452</h4>
              <img src={Users} className="bg-[#f1f2fa] rounded-full" />
            </div>
            <div>
              <h4 className="w-full">Total Employees</h4>
              <small>2 new Employees added!</small>
            </div>
          </div>

          <div className="card w-full">
            <div className="flex items-center justify-between ">
              <h4 className="text-4xl">62</h4>
              <img
                src="../src/assets/icons/absent.svg"
                className="bg-[#f1f2fa] rounded-full"
              />
            </div>
            <div>
              <h4 className="w-full">one Leave</h4>
              <small>+3% increase than yesterday</small>
            </div>
          </div>
          <div className="card w-full">
            <div className="flex items-center justify-between ">
              <h4 className="text-4xl">360</h4>
              <img
                src="../src/assets/icons/time.svg"
                className="bg-[#f1f2fa] rounded-full"
              />
            </div>
            <div>
              <h4 className="w-full">on time</h4>
              <small>10% less than yesterday</small>
            </div>
          </div>
          <div className="card w-full">
            <div className="flex items-center justify-between ">
              <h4 className="text-4xl">30</h4>
              <img
                src="../src/assets/icons/late.svg"
                className="bg-[#f1f2fa] rounded-full"
              />
            </div>
            <div>
              <h4 className="w-full">Absent</h4>
              <small>+3% increase than yesterday</small>
            </div>
          </div>
          <div className="card w-full">
            <div className="flex items-center justify-between ">
              <h4 className="text-4xl">622</h4>
              <img
                src="../src/assets/icons/late.svg"
                className="bg-[#f1f2fa] rounded-full"
              />
            </div>
            <div>
              <h4 className="w-full">Late Arrival</h4>
              <small>+3% increase than yesterday</small>
            </div>
          </div>
          <div className="card w-full">
            <div className="flex items-center justify-between ">
              <h4 className="text-4xl">6</h4>
              <img
                src="../src/assets/icons/early.svg"
                className="bg-[#f1f2fa] rounded-full"
              />
            </div>
            <div>
              <h4 className="w-full">Early Departures</h4>
              <small>-10% increase than yesterday</small>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-12">
        <div className="card col-span-2">
          <div className="flex items-center gap-3 justify-between">
            <h3 className="font-bold">Tableau de comparaison des présences</h3>
            <small className="text-indigo-500 relative after:absolute after:-left-2 after:top-2 after:bg-indigo-500 after:w-2 after:h-2 after:rounded-full">
              Quotidienne
            </small>
            <small>0 Par semaine</small>
            <small>0 Par mois</small>
            <img src={Config} />
          </div>
          <div>
            <AppChart />
          </div>
        </div>
        <div className="card">
          <table className="table-auto w-full">
            <thead className="text-sm text-left">
              <tr>
                <th>picture</th>
                <th>Nom</th>
                <th>Département</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr>
                <img src="../src/assets/icons/people2.svg" alt="" />
                <td>Tabe Lilan</td>
                <td>UI/UX Design</td>
                <td>
                  <button className="py-1 px-2 rounded-xl text-sm text-indigo-500 bg-[#e2e2fd]">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <img src="../src/assets/icons/people1.svg" alt="" />
                <td>Nfor Glen</td>
                <td>Developer</td>
                <td>
                  <button className="py-1 px-2 rounded-xl text-sm text-indigo-500 bg-[#e2e2fd]">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <img src="../src/assets/icons/ Glen.svg" alt="" />
                <td>Tabe Lilan</td>
                <td>UI/UX Design</td>
                <td>
                  <button className="py-1 px-2 rounded-xl text-sm text-indigo-500 bg-[#e2e2fd]">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

class AppChart extends PureComponent {
  render() {
    return (
      <LineChart width={600} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          width={5}
          activeDot={{ r: 8 }}
          accentHeight={10}
        />
      </LineChart>
    );
  }
}
