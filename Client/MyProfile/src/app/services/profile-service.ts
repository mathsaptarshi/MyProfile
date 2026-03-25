import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProfileData {
  personal_details: {
    name: string;
    email: string;
    mobile: string;
    address: string;
    live_in: string;
    linkedin: string;
    github: string;
    date_of_birth: string;
    father_name: string;
    languages_known: string[];
  };
  career_objective: string;
  job_experience: {
    company: string;
    designation: string;
    duration: string;
    projects?: {
      name: string;
      duration?: string;
      technologies?: string[];
      responsibilities: string[];
    }[];
    responsibilities?: string[];
  }[];
  it_skills: {
    programming_languages: string[];
    frameworks: string[];
    version_control: string[];
    project_management: string[];
    tools: string[];
  };
  educational_qualification: {
    examination: string;
    institution: string;
    year: string;
    percentage_cgpa: string;
  }[];
  certifications_and_workshops: {
    type: string;
    name: string;
    conducted_by: string;
  }[];
  extra_curricular: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<ProfileData> {
    return this.http.get<ProfileData>('/profile.json');
  }
}
