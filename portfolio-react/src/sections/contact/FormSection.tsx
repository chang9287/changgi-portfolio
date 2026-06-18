import { useState } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export default function FormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [subjectType, setSubjectType] = useState("");

  /* input 했을 때 바뀌는 함수 */
  const updateInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    });
  };

  /* form 제출될 때 실행되는 함수 */
  const sendEmail = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 메일 로딩
    const loading = toast.loading("메일 전송 중...");

    emailjs.send(
      "service_portfolio", // sevice_id
      "template_ghq4i9s", // template_id
      {
        from_name: form.name,
        email: form.email,
        subject_type: subjectType,
        message: form.message,
        date: new Date().toLocaleString()
      }, // 보내는 데이터
      "OVSf2gYJfGV0Sh8OA", // public_key
    )
    .then(() => {
      // 성공했을 때
      toast.dismiss(loading);
      toast.success("메일 전송 완료!");
      
      // setForm과 subjectType 초기화 상태로
      setForm({
        name: "",
        email: "",
        message: ""
      });
      setSubjectType("");
    })
    .catch((err) => {
      // 실패했을 때

      toast.dismiss(loading);
      toast.error("메일 전송 실패")

      console.log(err);
    })
  }

  /* common style */
  const commonInputStyle = "border border-contact-form-input px-4 py-3 rounded-xl outline-none placeholder:font-main"
  const commonRadioStyle = "cursor-pointer flex-1 text-center py-3 rounded-xl border transition-all duration-200"
  const commonRadioPrev = "bg-main-black text-white border-main-black"
  const commonRadioChecked = "bg-white text-[#9CA3AF] border-contact-form-input hover:border-main-black"

  return (
    <section>
      <div className='border border-contact-form-border bg-white p-8 rounded-2xl'>
        <h1 className='text-6xl font-bold font-title mb-6'>Contact Me</h1>
        <form onSubmit={sendEmail} className='flex flex-col gap-4 text-sm'>
          {/* 이름이나 기업 */}
          <input 
            type='text'
            name='name'
            value={form.name}
            onChange={updateInput}
            placeholder='이름 또는 회사명을 입력해주세요.'
            required
            className={`${commonInputStyle}`}
          />
          {/* 이메일 */}
          <input 
            type='email' 
            name='email'
            value={form.email}
            onChange={updateInput}
            placeholder='이메일 주소를 입력해주세요.'
            className={`${commonInputStyle}`}
            required
          />
          {/* 채용 문의 or 협업 문의 */}
          <div className='flex gap-4'>
            <label 
              className={`${commonRadioStyle} ${subjectType === "채용 문의" ? `${commonRadioPrev}` : `${commonRadioChecked}`}`}
            >
              <input 
                type='radio'
                name='subject'
                value="채용 문의"
                className="sr-only" // sr-only : 화면에는 안 보이지만, 스크린리더(접근성)는 읽을 수 있게 하는 클래스
                checked={subjectType === "채용 문의"}
                onChange={(e) => setSubjectType(e.target.value)}
                required
              />
              채용 문의
            </label>
            <label 
              className={`${commonRadioStyle} ${subjectType === "협업 문의" ? `${commonRadioPrev}` : `${commonRadioChecked}`}`}
            >
              <input 
                type='radio'
                name='subject'
                value="협업 문의"
                className="sr-only" 
                checked={subjectType === "협업 문의"}
                onChange={(e) => setSubjectType(e.target.value)}
                required
              />
              협업 문의
            </label>
          </div>
          {/* 메일 내용 */}
          <textarea 
            name='message'
            value={form.message}
            onChange={updateInput}
            placeholder='내용을 입력해주세요.'
            className={`resize-none ${commonInputStyle}`}
            required
            rows={5}
          />
          {/* 보내기 버튼 */}
          <button 
            type='submit' 
            className='py-3 border rounded-4xl cursor-pointer text-white font-bold bg-main-black hover:bg-contact-button-hover transition duration-200'
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}