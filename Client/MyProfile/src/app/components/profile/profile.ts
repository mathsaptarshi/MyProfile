import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, ProfileData } from '../../services/profile-service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  profileService = inject(ProfileService);
  profileData = signal<ProfileData | null>(null);

  constructor() {
    // Load profile data on component initialization
    this.loadProfileData();
  }

  private loadProfileData(): void {
    this.profileService.getProfileData().subscribe((data: ProfileData) => {
      this.profileData.set(data);
      console.log(data)
    });
  }
}
