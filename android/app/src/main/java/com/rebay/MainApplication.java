package com.rebay;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.imagepicker.ImagePickerPackage;
import com.dylanvann.fastimage.FastImageViewPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import com.reactnativenavigation.NavigationApplication;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;



public class MainApplication extends NavigationApplication {
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
              new RNFirebasePackage(),
              new RNDeviceInfo(),
              new RNFirebaseNotificationsPackage(),
              new RNFirebaseMessagingPackage()


      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public boolean isDebug(){
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {

    return Arrays.<ReactPackage>asList(
            new ImagePickerPackage(),
            new FastImageViewPackage(),
            new RNFirebasePackage(),
            new RNDeviceInfo(),
            new RNFirebaseNotificationsPackage(),
            new RNFirebaseMessagingPackage()

    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages(){
    return getPackages();
  }
  @Override
  public String getJSMainModuleName() {
    return "index";
  }

}
