export interface PostSurvey {
  id: number;
  state: string;
  question_id: number;
  suggested_answer_id: number | string;
  matrix_row_id: number | string;
  answer_type: string;
  value_datetime: string;
  value_date: string;
  value_text_box: string;
  value_numberical_box: string;
  value_char_box: string;
  value_comment?: string;
}
export interface AnswerType {
  skipped: string;
  question_id: number;
  suggested_answer_id: number;
  matrix_row_id: number;
  answer_type: string;
  value_datetime: string;
  value_date: string;
  value_text_box: string;
  value_numberical_box: string;
  value_char_box: string;
  value_comment: string;
}
