import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ LoginComponent } from './Components/login/login.component'
import{ SignUpComponent } from './Components/sign-up/sign-up.component'
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { IndexPageComponent } from './Components/index-page/index-page.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { AboutComponent } from './Components/about/about.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { PricingComponent } from './Components/pricing/pricing.component';

import { QuestionpaperComponent } from './Components/dashboard/welcome-instruction/questionpaper/questionpaper.component';
import { WelcomeInstructionComponent } from './Components/dashboard/welcome-instruction/welcome-instruction.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdmindashboardComponent } from './Components/admin/admindashboard/admindashboard.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AddquestionComponent } from './Components/teacherComponent/addquestion/addquestion.component';
import { AddschoolComponent } from './Components/admin/addschool/addschool.component';
import { AddboardComponent } from './Components/admin/addboard/addboard.component';
import { ViewquestionComponent } from './Components/teacherComponent/viewquestion/viewquestion.component';
import { ViewschoolComponent } from './Components/admin/viewschool/viewschool.component';
import { ViewboardComponent } from './Components/admin/viewboard/viewboard.component';

import { ResultsComponent } from './Components/results/results.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AddquestionsetComponent } from './Components/teacherComponent/viewquestion/addquestionset/addquestionset.component';
import { TeacherDashboardComponent } from './Components/teacherComponent/teacher-dashboard/teacher-dashboard.component';
import { TeacherSignupComponent } from './Components/admin/teacher/teacher-signup/teacher-signup.component';
import { ViewStudentsComponent } from './Components/teacherComponent/view-students/view-students.component';
import { TeacherLoginComponent } from './Components/teacherComponent/teacher-login/teacher-login.component';
import { MySchoolviewComponent } from './Components/teacherComponent/my-schoolview/my-schoolview.component';
import { QuestionlistComponent } from './Components/teacherComponent/viewquestion/questionlist/questionlist.component';
import { GenerateResultComponent } from './Components/teacherComponent/generate-results/generate-results.component';
import { MyProfileComponent } from './Components/teacherComponent/my-profile/my-profile.component';
import { ViewteacherComponent } from './Components/admin/teacher/viewteacher/viewteacher.component';

const routes: Routes = [
 // Add more routes as needed
 { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to signup by default

  // HOME
  { path: 'home', component: IndexPageComponent },
  { path: 'student', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  //{ path: 'dashboard/:studentId', component: DashboardComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'price', component: PricingComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'about', component: AboutComponent },

  // STUDENT
  { path: 'student', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'welcome', component: WelcomeInstructionComponent },
  { path: 'questionPaper', component: QuestionpaperComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'profile', component: ProfileComponent },

  // TEACHER
  { path: 'teacherDashboard', component: TeacherDashboardComponent },
  {path : 'teacherLogin', component: TeacherLoginComponent},
  {path : 'viewStudents', component: ViewStudentsComponent},
  {path : 'myschool', component: MySchoolviewComponent},
  {path : 'generateResults', component: GenerateResultComponent},
  { path : 'myProfile',component: MyProfileComponent},

  //ADMIN
  { path: 'admin', component: AdminComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },

  { path: 'addteachers', component: TeacherSignupComponent },
  { path: 'viewteachers', component: ViewteacherComponent },

  { path: 'addquestion', component: AddquestionComponent },
  { path: 'addschool', component: AddschoolComponent },
  { path: 'addboard', component: AddboardComponent },

  { path: 'viewquestion', component: ViewquestionComponent },
  { path: 'addquestionset', component: AddquestionsetComponent },
  {path: 'questions', component: QuestionlistComponent},

  { path: 'viewschool', component: ViewschoolComponent },
  { path: 'viewboard', component: ViewboardComponent },

  // Add more routes as needed
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to signup by default

  // Wildcard route for 404 page - should be the last route
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
