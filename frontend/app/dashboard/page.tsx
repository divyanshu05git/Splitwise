import ExpenseChart from "@/components/ExpenseChart";


export default function Dashboard() {

    return (

        <div className="bg-[var(--background)] min-h-screen py-8">

            {/* expense chart grid */}
        <div className="bg-[var(--card)] rounded-xl shadow p-6 w-full max-w-2xl mx-auto">

            <h2 className="text-[var(--text-primary)] text-xl font-semibold mb-6">
            Total Spent
            </h2>

            <div className="h-[340px]">
            <ExpenseChart />
            </div>

        </div>

        </div>
                
    );
}