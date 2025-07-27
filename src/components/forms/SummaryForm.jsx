import { useCV } from '../../context/CVContext';

export default function SummaryForm() {
  const { state, dispatch } = useCV();

  const handleChange = (value) => {
    dispatch({
      type: 'UPDATE_SUMMARY',
      payload: value
    });
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Ringkasan Profesional
      </label>
      <textarea
        value={state.summary}
        onChange={(e) => handleChange(e.target.value)}
        rows={5}
        className="form-textarea"
        placeholder="Tulis ringkasan singkat tentang latar belakang profesional, keahlian utama, dan tujuan karir Anda..."
      />
      <div className="mt-3 flex items-start gap-2">
        <div className="p-1 bg-blue-100 rounded-full">
          <span className="text-blue-600 text-xs">💡</span>
        </div>
        <p className="text-sm text-gray-600">
          2-4 kalimat yang menyoroti pengalaman dan apa yang bisa Anda tawarkan kepada calon pemberi kerja.
        </p>
      </div>
    </div>
  );
}