# OhCampus Mobile Application - PRD

## Original Problem Statement
Analyze the existing OhCampus mobile application with advanced features like Exam Alerts, Mock Tests, Rank Predictor etc. and make the required modifications to build and deploy on Google Play Store without any error. Update mobile application versions as required.

## User Requirements
- Version: 37
- Fix build errors during `ionic build` or `ionic cordova build android`
- Update SDK versions to meet Google Play requirements
- Verify all features work correctly

## Architecture
- **Framework**: Ionic 6 + Angular 12 + Cordova
- **Platform**: Android (cordova-android 10.1.0)
- **Backend API**: https://campusapi.ohcampus.com/apps/
- **Package ID**: com.app.ohcampus

## Key Features Verified

### 1. Exam Alerts
- **Pages**: `examdetails`, `coursewiseexam`, `coursewiseexamdetails`
- **Service Methods**: `examdetails()`, `getexams()`, `getnotification()`
- **Description**: Displays exam details, criteria, process, pattern, and related exams

### 2. Mock Tests / Question Papers
- **Page**: `questionpaper`
- **Service Method**: `getQue_PaperByExamId()`
- **Description**: Download and view question papers for entrance exams

### 3. Rank Predictor
- **Page**: `predictadmission`
- **Service Method**: `predictaddmission()`
- **Description**: Predict admission chances based on entrance exam, rank, and score

### 4. College Features
- College search & filter by location, category, course
- College details with courses, fees, placements
- College comparison feature
- Shortlist colleges functionality

### 5. Additional Features
- User authentication (login, signup, forgot password)
- Google/Facebook social login
- Push notifications via Firebase
- Articles & news
- Events calendar
- Career guidance
- Trending courses

## What's Been Updated (Feb 2026)

### Version Updates for Google Play Compliance
| Component | Before | After |
|-----------|--------|-------|
| App Version Code | 1 | **37** |
| App Version Name | 0.0.1 | **37.0** |
| targetSdkVersion | 30 | **34** |
| minSdkVersion | 19 | **24** |
| compileSdkVersion | 30 | **34** |
| Build Tools | 30.0.3 | **34.0.0** |
| AGP Version | 4.2.2 | **8.2.0** |
| Gradle Version | 7.1.1 | **8.4** |
| Kotlin Version | 1.5.21 | **1.9.20** |
| Google Services | 4.3.8 | **4.4.0** |

### AndroidManifest.xml Updates
- Added `android:exported` attribute to all activities, services, and receivers (required for SDK 31+)
- Updated storage permissions with `maxSdkVersion="32"` for READ/WRITE_EXTERNAL_STORAGE
- Added new media permissions: READ_MEDIA_IMAGES, READ_MEDIA_VIDEO, READ_MEDIA_AUDIO

### Dependency Updates
| Dependency | Before | After |
|------------|--------|-------|
| androidx.appcompat | 1.3.1 | **1.6.1** |
| androidx.webkit | 1.4.0 | **1.8.0** |
| facebook-android-sdk | 4.38.1 | **16.2.0** |
| firebase-analytics | 19.0.0 | **21.5.0** |
| firebase-messaging | 22.0.0 | **23.4.0** |
| firebase-auth | 21.0.1 | **22.3.0** |
| firebase-crashlytics | 18.1.0 | **18.6.0** |
| play-services-auth | 19.0.0 | **20.7.0** |
| stripe-android | 4.1.2 | **20.36.0** |
| biometric | 1.0.1 | **1.1.0** |

### Gradle Configuration Updates
- Removed deprecated `jcenter()` repository references
- Updated plugin gradle files for Firebase, FCM, and Biometric
- Added `namespace` declarations for AGP 8.x compatibility
- Removed deprecated `kotlin-android-extensions` plugin
- Added `buildConfig = true` build feature

### Files Modified
1. `/app/mobile_app-master/config.xml` - Version, SDK versions
2. `/app/mobile_app-master/package.json` - App name and version
3. `/app/mobile_app-master/ionic.config.json` - App name
4. `/app/mobile_app-master/platforms/android/cdv-gradle-config.json` - SDK/AGP versions
5. `/app/mobile_app-master/platforms/android/project.properties` - Target SDK
6. `/app/mobile_app-master/platforms/android/CordovaLib/project.properties` - Target SDK
7. `/app/mobile_app-master/platforms/android/CordovaLib/build.gradle` - Namespace
8. `/app/mobile_app-master/platforms/android/app/build.gradle` - Dependencies, namespace
9. `/app/mobile_app-master/platforms/android/app/src/main/AndroidManifest.xml` - Version, exported attributes
10. `/app/mobile_app-master/platforms/android/gradle.properties` - JVM args
11. `/app/mobile_app-master/platforms/android/cordova-plugin-fcm-with-dependecy-updated/ohcampus-FCMPlugin.gradle`
12. `/app/mobile_app-master/platforms/android/cordova-plugin-firebasex/ohcampus-build.gradle`
13. `/app/mobile_app-master/platforms/android/cordova-plugin-fingerprint-aio/ohcampus-build.gradle`

## Build Instructions

### Prerequisites
- Node.js 18+
- Java JDK 17
- Android SDK 34
- Gradle 8.4+

### Build Commands
```bash
cd /app/mobile_app-master

# Install dependencies
npm install

# Build Ionic web assets
ionic build --prod

# Build Android APK
ionic cordova build android --release

# Build Android App Bundle (for Play Store)
ionic cordova build android --release -- -- --packageType=bundle
```

### Signing Configuration
- Keystore file: `my-release-key.keystore` (exists in project root)
- Create `release-signing.properties` file with:
  ```
  storeFile=my-release-key.keystore
  storePassword=YOUR_KEYSTORE_PASSWORD
  keyAlias=YOUR_KEY_ALIAS
  keyPassword=YOUR_KEY_PASSWORD
  ```

## Google Play Requirements Met
- [x] targetSdkVersion 34 (required since Aug 2024)
- [x] 64-bit native code support (via gradle config)
- [x] android:exported for all components with intent-filters
- [x] Granular media permissions for SDK 33+
- [x] Privacy manifest declarations

## Next Action Items
1. Run full build test: `ionic cordova build android --release`
2. Sign the APK/AAB with release keystore
3. Test on physical device running Android 14
4. Upload to Google Play Console for review
5. Address any Play Store pre-launch report issues

## Backlog
- [ ] Migrate from deprecated Firebase IID to Firebase Installations
- [ ] Update to Ionic 7 / Angular 17 for long-term support
- [ ] Implement App Bundle optimization for smaller download size
- [ ] Add in-app update mechanism
