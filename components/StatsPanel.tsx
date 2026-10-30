/**
 * File: components/StatsPanel.tsx
 * Author: Devon Huynh
 * Date: October 29, 2026
 * Stats panel shows some of the stats of the student card, where each number is pulled from the information of the student card.
 * The 3 stats that the panel will show are how many students are listed on the page, how many students are on the honourRoll if their grade is 80 or above, and how many students are in Grrade 12.
 */

// Stats panel
interface StudentStatsRow {
    average: number;
    grade: number;
}

interface StatsPanelProps {
    students: StudentStatsRow[];
}

const StatsPanel = ({students}: StatsPanelProps) => {
    const total = students.length;
    const honourRoll = students.filter((s) => s.average >= 80).length;
    const grade12 = students.filter((s) => s.grade === 12).length;

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 text-center">
                <p className="text-3xl font-bold">{total}</p>
                <p className="text-sm text-slate-700">Students</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center">
                <p className="text-3xl font-bold">{honourRoll}</p>
                <p className="text-sm text-slate-700">Honour Roll</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center">
                <p className="text-3xl font-bold">{grade12}</p>
                <p className="text-sm text-slate-700">Grade 12</p>
            </div>
        </div>
    );
};

export default StatsPanel;