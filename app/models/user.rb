class User < ApplicationRecord
  attr_reader :password
  

  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :tracks,
  foreign_key: :artist_id,
  class_name: 'Track'

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_unique_session_token
    self.session_token = SecureRandom::urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom::urlsafe_base64
    end
    self.session_token
  end

  def reset_session_token!
    self.session_token = self.generate_unique_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.generate_unique_session_token unless self.session_token
  end

end
